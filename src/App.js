import { Box, Button, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import CalcBody from "./components/CalcBody";
import DisplayScreen from "./components/DisplayScreen";
import CalcHeader from "./components/CalcHeader";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CalcBody />
    </ThemeProvider>
  );
}

export default App;
