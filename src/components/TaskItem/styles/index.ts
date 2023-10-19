import { Box, Stack, styled } from "@mui/material";

export const TaskCardWrapper = styled(Stack)({
	borderRadius: "8px", 
	width: "328px", 
	height: "162px",
	boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)", 
	overflow: "hidden", 
})

export const TaskCardHeader = styled(Box)({
	height: "36px",
	width: "100%",
	marginBottom: "16px",
})

export const Separator = styled(Box)(({theme}) => {
	const {palette: {accentColors: {strokeGrey}}} = theme;

	return ({
		backgroundColor: strokeGrey,
		height: "0.5px",
		width: "100%",
		marginBottom: "16px"
	})
})


