import { FunctionComponent, useRef } from "react";

interface FocusProps {}

const Focus: FunctionComponent<FocusProps> = () => {
  let inputRef = useRef<HTMLInputElement>(null);
  let handleClick = () => {
    (inputRef.current as HTMLInputElement).focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        style={{ backgroundColor: "cyan", borderRadius: "5px" }}
        onClick={handleClick}
      >
        Focus
      </button>
    </>
  );
};

export default Focus;
