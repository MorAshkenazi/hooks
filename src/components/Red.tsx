import { FunctionComponent, useReducer } from "react";

interface RedProps {}

const initialValue: number = 0;

const reducer = (state: number, action: string): number => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return initialValue;
  }
};

const Red: FunctionComponent<RedProps> = () => {
  const [counter, changeCounter] = useReducer(reducer, initialValue);
  return (
    <>
      <div>Counter is {counter}</div>
      <button onClick={() => changeCounter("inc")}>INC</button>
      <button onClick={() => changeCounter("dec")}>DEC</button>
      <button onClick={() => changeCounter("reset")}>RESET</button>
    </>
  );
};

export default Red;
