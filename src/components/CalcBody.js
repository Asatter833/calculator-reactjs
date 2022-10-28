import {
  Container,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";

//Icons Import
import { Icon } from "@iconify/react";
import DisplayScreen from "./DisplayScreen";
import CalcHeader from "./CalcHeader";
import { Box } from "@mui/system";
import ButtonBox from "./ButtonBox";

const CalcBody = () => {
  return (
    // <Container>
    <>
      <Paper
        elevation={4}
        sx={{
          height: "96vh",
          width: "500px",
          borderRadius: "10px",
          // bgcolor: "#1D2029",
        }}
      >
        <CalcHeader />
        <DisplayScreen />
        <Box sx={{ height: "auto", border: "2px solid #000" }}></Box>
      </Paper>
    </>
    // </Container>
  );
};

export default CalcBody;
