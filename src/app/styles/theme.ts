import { createTheme } from "@mui/material";

import { MuiCssBaseline } from "./components/cssbaseline";
import { typography } from "./typography";
import { palette } from "./palette";

export const mainTheme = createTheme({
	typography,
	palette,
	components: {
		MuiCssBaseline,
	}
});
