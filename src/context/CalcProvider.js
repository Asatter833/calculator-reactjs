import React from "react";

export const CalcContext = React.createContext();
const CalcProvider = ({ children }) => {
  const [num, setNum] = React.useState("");
  const [prev, setPrev] = React.useState("");
  const addNum = (value) => {
    let x = `${num}${value}`;
    x = x.split("+");
    x = x?.[x.length - 1]?.split("-");
    x = x?.[x.length - 1]?.split("×");
    x = x?.[x.length - 1]?.split("÷");
    let y = `${num}${value}`;
    setNum(
      `${y.slice(0, y.length - x[x.length - 1].length)}${Number(
        x[x.length - 1]
      )}`
    );
  };
  const back = () => {
    setNum(num.slice(0, num.length - 1));
  };
  const calculate = () => {
    setPrev(num);

    setNum(String(eval(num.replaceAll("×", "*").replaceAll("÷", "/")) || 0));
  };
  return (
    <CalcContext.Provider
      value={{
        num,
        addNum,
        prev,
        setPrev,
        calculate,
        clear: () => setNum(""),
        AC: () => {
          setNum("");
          setPrev("");
        },
        back,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
