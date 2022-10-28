import { Box, Button, Paper, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import CalcBody from "./components/CalcBody";
import DisplayScreen from "./components/DisplayScreen";
import CalcHeader from "./components/CalcHeader";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1.5,
        }}
      >
        <CalcBody />
      </Container>
    </ThemeProvider>
  );
}

export default App;
