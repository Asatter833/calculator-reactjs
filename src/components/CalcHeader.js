import { Stack, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Icon } from "@iconify/react";

const CalcHeader = () => {
  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        <IconButton color={"black"} size={"small"}>
          <Icon icon="iconoir:menu-scale" />
        </IconButton>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "500",
          }}
        >
          Calculator
        </Typography>

        <IconButton size={"small"}>
          <Icon icon="bi:moon" />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default CalcHeader;
