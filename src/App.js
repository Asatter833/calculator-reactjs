import { CssBaseline, ThemeProvider } from "@mui/material";
import CalcBody from "./components/CalcBody";
import CalcProvider from "./context/CalcProvider";

import theme from "./style/theme";

function App() {
  return (
    <CalcProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CalcBody />
      </ThemeProvider>
    </CalcProvider>
  );
}

export default App;
