import { FunctionComponent, useRef } from "react";

interface ColorsProps {}

const Colors: FunctionComponent<ColorsProps> = () => {
  let divRef = useRef<HTMLDivElement>(null);
  let handleColor = () => {
    (divRef.current as HTMLDivElement).style.backgroundColor = "yellow";
    (divRef.current as HTMLDivElement).style.color = "blue";
  };
  return (
    <>
      <div ref={divRef} onClick={handleColor}>
        Something
      </div>
    </>
  );
};

export default Colors;
