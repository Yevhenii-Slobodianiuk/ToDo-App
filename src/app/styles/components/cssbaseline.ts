import MontserratRegular from "../../assets/fonts/Montserrat-Regular.ttf"

export const MuiCssBaseline = {
	styleOverrides: `
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('ttf');
    font-style: normal;
    font-weight: 400;
    font-stretch: 100%;
    font-display: swap;
  }
`
};
