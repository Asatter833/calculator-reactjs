import React from "react";
import { Icon } from "@iconify/react";
import { Button, Grid } from "@mui/material";
import CButton from "../style/CButton";
import { Stack } from "@mui/system";

const btnValues = [
  { btn: "AC", value: "delete", sx: { color: "#F16565" } },
  {
    btn: <Icon icon="ic:baseline-plus-minus-alt" />,
    value: "8",
    sx: { color: "#63C3C3" },
  },
  { btn: "%", value: "%", sx: { color: "#63C3C3" } },
  { btn: <Icon icon="ph:divide-bold" />, value: "X", sx: { color: "#63C3C3" } },
  { btn: "7", value: "7" },
  { btn: "8", value: "8" },
  { btn: "9", value: "9" },
  { btn: <Icon icon="uim:multiply" />, value: "X", sx: { color: "#63C3C3" } },
  { btn: "4", value: "4" },
  { btn: "5", value: "5" },
  { btn: "6", value: "6" },
  { btn: "-", value: "-", sx: { color: "#63C3C3" } },
  { btn: "1", value: "1" },
  { btn: "2", value: "2" },
  { btn: "3", value: "3" },
  { btn: "+", value: "+", sx: { color: "#63C3C3" } },
  {
    btn: <Icon icon="ph:backspace-bold" />,
    value: "Back",
    sx: { color: "#F16565" },
  },
  { btn: "0", value: "0" },
  { btn: ".", value: "." },
  { btn: "=", value: "=", sx: { color: "#63C3C3" } },
];

const ButtonBox = () => {
  return (
    <>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="space-evenly"
      >
        {btnValues.map((btn, index) => (
          <CButton
            color={"white"}
            sx={btn.sx || {}}
            key={index}
            variant="contained"
            onClick={() => {
              console.log(btn.value);
            }}
          >
            {btn.btn}
          </CButton>
        ))}
      </Stack>
    </>
  );
};

export default ButtonBox;
