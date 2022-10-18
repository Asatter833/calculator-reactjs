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
import { bgcolor } from "@mui/system";

const CalcBody = () => {
  return (
    <Container sx={{ mt: "70px" }}>
      <Stack alignItems={"center"}>
        <Paper
          elevation={4}
          sx={{
            height: "812px",
            width: "375px",
            borderRadius: "10px",
            bgcolor: "#1D2029",
          }}
        >
          <ToggleButtonGroup
            sx={{
              mt: "8px",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#292C36",
            }}
          >
            <ToggleButton>
              <Icon icon="clarity:sun-line" />
            </ToggleButton>
            <ToggleButton>
              <Icon icon="bi:moon" />
            </ToggleButton>
          </ToggleButtonGroup>

          <DisplayScreen />
        </Paper>
      </Stack>
    </Container>
  );
};

export default CalcBody;
