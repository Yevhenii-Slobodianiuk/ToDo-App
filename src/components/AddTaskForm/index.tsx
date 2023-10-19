import { useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addTask } from '../../app/store/taskSlice';

export const AddTaskForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [priority, setPriority] = useState('');

	const dispatch = useDispatch()

	const handleSubmit = (e: any) => {
		e.preventDefault();

		dispatch(
			addTask({
				title,
				description,
				priority,
				id: `${Date.now()}`,
				status: 'notStarted',
			})
		);

		setTitle('');
		setDescription('');
		setPriority('');
	};

	return (
		<Box sx={{
			width: "514px", m: "0 auto", borderRadius: "8px",
			boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)", overflow: "hidden", p: "16px 16px", mb: "60px"
		}}>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Title"
					variant="standard"
					value={title}
		 			onChange={(e) => setTitle(e.target.value)}
					required
					fullWidth
					sx={{mb: "10px"}}
				/>
				<TextField
					label="Description"
					variant="standard"
					value={description}
		 			onChange={(e) => setDescription(e.target.value)}
					multiline
					fullWidth
					sx={{mb: "10px"}}
				/>
				<FormControl variant="standard" fullWidth margin="normal" sx={{mb: "20px"}}>
					<InputLabel>Priority</InputLabel>
					<Select
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
						label="Priority"
						required
					>
						<MenuItem value="low">Low</MenuItem>
						<MenuItem value="medium">Medium</MenuItem>
						<MenuItem value="high">High</MenuItem>
					</Select>
				</FormControl>
				<Button type="submit" variant="contained" color="primary">
		 			Add task
				</Button>
			</form>
		</Box>
	);
};

