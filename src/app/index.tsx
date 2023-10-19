import { ThemeProvider } from "@emotion/react";
import { AppLayout } from "../components"
import { mainTheme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
       <AppLayout />
		  </ThemeProvider>
    </Provider>
  );
}