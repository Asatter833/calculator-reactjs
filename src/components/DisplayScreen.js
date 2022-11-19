import {
  Box,
  Container,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
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
          position: "relative",
        }}
      >
        <Typography
          variant={"h5"}
          color="#707070"
          textAlign="right"
          sx={{
            wordBreak: "break-word",
          }}
        >
          {calc.prev}
        </Typography>
        {/* <Typography
          variant={"h3"}
          sx={{
            my: 2,
            fontWeight: "500",
            position: "relative",
            maxWidth: "100%",
          }}
          textAlign="right"
          noWrap={true}
        >
          {calc.num || 0}
        </Typography> */}
        //input
        <InputBase
          value={calc.num || 0}
          sx={{
            my: 2,
            fontWeight: "500",
            position: "relative",
            maxWidth: "100%",
            fontSize: (theme) => theme.typography.h3.fontSize,
          }}
          multiline
          maxRows={2}
          inputProps={{
            sx: {
              textAlign: "end",
            },
          }}
        />
      </Container>
    </>
  );
};

export default DisplayScreen;
