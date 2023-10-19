import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";

import { Task, updateTask } from "../../app/store/taskSlice";
import { Separator, TaskCardHeader, TaskCardWrapper } from "./styles";
import { useDispatch } from "react-redux";

export const CardButton = styled.button`
	background-color: #fff;
	border: none;
	cursor: pointer;
	text-align: start;
`

export const TaskItem = ({ title, description, priority, status, id }: Task) => {
	const [openDialog, setOpenDialog] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const [newDescription, setNewDescription] = useState(description);

	const dispatch = useDispatch();

	let priorityColor = "";
	let taskCardHeaderColor = ""

	switch (priority) {
		case "low": priorityColor = "accentColors.lightGreen";
			break;
		case "medium": priorityColor = "mainColors.green";
			break;
		case "high": priorityColor = "mainColors.red";
			break;
		default: priorityColor = "";
			break;
	}

	switch (status) {
		case "completed": taskCardHeaderColor = "mainColors.green";
			break;
		case "inProgress": taskCardHeaderColor = "accentColors.lightGreen";
			break;
		case "notStarted": taskCardHeaderColor = "mainColors.grey";
			break;
		default: taskCardHeaderColor = "";
			break;
	}

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleChangeDialog = () => {
		dispatch(updateTask({
			id: id,
			title: newTitle,
			priority: priority,
			description: newDescription,
			status: status,
		}))
		
		setOpenDialog(false);
	};

	const handleStatusChange = (newStatus: "completed" | "inProgress" | "notStarted") => {
		dispatch(updateTask({
			id: id,
			status: newStatus,
			title: title,
			priority: priority,
			description: description,
		}))
	};

	return (
		<CardButton onClick={handleOpenDialog}>
			<TaskCardWrapper>
				<TaskCardHeader sx={{ bgcolor: taskCardHeaderColor }}></TaskCardHeader>
				<Stack sx={{ padding: "0 16px" }}>
					<Typography variant="TaskHeader" sx={{ mb: "5px" }}>{title}</Typography>
					<Typography variant="TaskDesc" sx={{ mb: "10px" }}>{`${description.slice(0, 30)}...`}</Typography>
					<Separator></Separator>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="TaskDesc">Priority</Typography>
						<Typography variant="TaskDesc" color={priorityColor}>{priority}</Typography>
					</Stack>
				</Stack>
			</TaskCardWrapper>

			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogContent>
					<DialogContentText sx={{mb: "16px"}}>
						Here you can change your task. Press button 'save' to save your changes and than press ESC to close the modal window
					</DialogContentText>
					<TextField
						id="title"
						label="Title"
						value={newTitle}
		 				onChange={(e) => setNewTitle(e.target.value)}
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						id="description"
						label="Description"
						value={newDescription}
		 				onChange={(e) => setNewDescription(e.target.value)}
						type="text"
						fullWidth
						multiline
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Stack direction="row" justifyContent="space-between" sx={{width: "100%"}}>
						<Box>
							<Button onClick={() => handleStatusChange('completed')}>Completed</Button>
							<Button onClick={() => handleStatusChange('inProgress')}>In progress</Button>
							<Button onClick={() => handleStatusChange('notStarted')}>Not started</Button>
						</Box>
						<Button onClick={handleChangeDialog}>Save</Button>
					</Stack>
				</DialogActions>
			</Dialog>
		</CardButton>
	);
}