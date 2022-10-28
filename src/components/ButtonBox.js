import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

const btnValues = [
  ["C", "<Icon icon='ic:baseline-plus-minus-alt' />", "%", "÷"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["<Icon icon='fluent:backspace-20-regular' />", "0", ".", "="],
];

const ButtonBox = () => {
  return btnValues.flat().map((btn, i) => {
    return (
      <Button
        key={i}
        value={btn}
        onClick={() => {
          console.log(`${btn} clicked`);
        }}
      />
    );
  });
};

export default ButtonBox;
