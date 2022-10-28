import styled from "@emotion/styled";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const DisplayScreen = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            // border: "2px solid #000",
            borderRadius: "5px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Typography>308 x 42</Typography>
          <Typography
            variant={"h4"}
            sx={{
              my: 2,
              fontWeight: "500",
            }}
          >
            12,300
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default DisplayScreen;
