import React from "react";
import { Icon } from "@iconify/react";
import { Button, Grid } from "@mui/material";
import CButton from "../style/CButton";
import { Stack } from "@mui/system";
import { CalcContext } from "../context/CalcProvider";

const ButtonBox = () => {
  const calc = React.useContext(CalcContext);

  const btnValues = [
    {
      btn: "AC",
      value: "delete",
      sx: { color: "#F16565" },
      onClick: () => {
        calc.AC();
      },
    },
    {
      btn: "C",
      value: "8",
      sx: { color: "#63C3C3" },
      onClick: () => {
        calc.clear();
      },
    },
    { btn: "%", value: "%", sx: { color: "#63C3C3" }, disabled: true },
    {
      btn: <Icon icon="ph:divide-bold" />,
      value: "÷",
      sx: { color: "#63C3C3" },
    },
    { btn: "7", value: "7", sx: { color: "#000000" } },
    { btn: "8", value: "8", sx: { color: "#000000" } },
    { btn: "9", value: "9", sx: { color: "#000000" } },
    {
      btn: <Icon icon="uim:multiply" />,
      value: "×",
      sx: { color: "#63C3C3" },
    },
    { btn: "4", value: "4", sx: { color: "#000000" } },
    { btn: "5", value: "5", sx: { color: "#000000" } },
    { btn: "6", value: "6", sx: { color: "#000000" } },
    { btn: "-", value: "-", sx: { color: "#63C3C3" } },
    { btn: "1", value: "1", sx: { color: "#000000" } },
    { btn: "2", value: "2", sx: { color: "#000000" } },
    { btn: "3", value: "3", sx: { color: "#000000" } },
    { btn: "+", value: "+", sx: { color: "#63C3C3" } },
    {
      btn: <Icon icon="ph:backspace-bold" />,
      value: "Back",
      sx: { color: "#F16565" },
      onClick: () => {
        calc.back();
      },
    },
    { btn: "0", value: "0", sx: { color: "#000000" } },
    { btn: ".", value: ".", sx: { color: "#000000" } },
    {
      btn: "=",
      value: "=",
      sx: { color: "#63C3C3" },
      onClick: () => {
        calc.calculate();
      },
    },
  ];

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
            disabled={btn.disabled}
            onClick={() => {
              // calc.setPrev(calc.num);
              if (btn.onClick) {
                btn.onClick();
                return;
              }
              calc.addNum(btn.value);
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
