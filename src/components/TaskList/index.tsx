import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "../TaskItem";
import { RootState } from "../../app/store/store";
import { Task } from "../../app/store/taskSlice";

export const TaskList = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	return (
		<Stack direction="column" sx={{margin: "0 auto", width: "100%"}}>
			<Stack direction="row" justifyContent="space-between" sx={{mb: "30px"}}>
				<Typography variant="SubHeader">Your tasks</Typography>
				<Stack direction="row" alignItems="start">
				<TextField
					label="search"
					variant="standard"
					sx={{mt: "-15px"}}
				/>
				</Stack>
			</Stack>
			<Box sx={{ flexGrow: 1}}>
				<Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{tasks.map((task) => {
						return (
							<Grid item key={task.id}>
								<TaskItem
									title={task.title}
									description={task.description}
									priority={task.priority}
									status={task.status}
									id={task.id} />
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Stack>
	);
}
