import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { CalcContext } from "../context/CalcProvider";

const DisplayScreen = () => {
  const calc = React.useContext(CalcContext);
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
          {calc.prev}
        </Typography>
        <Typography
          variant={"h3"}
          sx={{
            my: 2,
            fontWeight: "500",
          }}
        >
          {calc.num || 0}
        </Typography>
      </Container>
    </>
  );
};

export default DisplayScreen;
