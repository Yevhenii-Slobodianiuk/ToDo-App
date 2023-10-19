import { Container, Stack } from "@mui/material";

import { Header } from "../Header";
import { AddTaskForm } from "../AddTaskForm";
import { TaskList } from "../TaskList";

export const AppLayout = () => {
	return (
		<Container maxWidth="xl">
			<Stack direction="column" sx={{ margin: "0 auto" }}>
				<Header />
				<AddTaskForm />
				<TaskList />
			</Stack>
		</Container>

	);
}