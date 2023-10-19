import { Typography } from "@mui/material";

import { HeaderWrapper } from "./styles";

export const Header = () => {
	return(
		<HeaderWrapper>
			<Typography variant="HHeader">ToDo application</Typography>
			<Typography variant="SubHeader">list of tasks for today</Typography>
		</HeaderWrapper>
	);
}