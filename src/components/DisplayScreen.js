import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const DisplayScreen = () => {
  return (
    <>
      <Container
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant={"h5"} color="#707070">
          308 x 42
        </Typography>
        <Typography
          variant={"h3"}
          sx={{
            my: 2,
            fontWeight: "500",
          }}
        >
          12,300
        </Typography>
      </Container>
    </>
  );
};

export default DisplayScreen;
