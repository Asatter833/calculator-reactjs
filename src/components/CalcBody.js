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
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        disableGutters
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            maxHeight: "896px",
            width: "100vw",
            maxWidth: "414px",
            borderRadius: {
              sm: "20px",
            },
            boxShadow: {
              xs: 0,
              sm: 3,
            },
          }}
        >
          <CalcHeader />
          <DisplayScreen />
          <Box
            sx={{
              borderRadius: "0 0 10px 10px",
              bgcolor: "#F0F0F0",
              p: "5px",
            }}
          >
            <ButtonBox />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default CalcBody;
