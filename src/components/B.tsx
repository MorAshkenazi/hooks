import { FunctionComponent, useContext } from "react";
import { SiteTheme } from "../App";

interface BProps {}

const B: FunctionComponent<BProps> = () => {
  const theme = useContext(SiteTheme);
  return (
    <>
      <button style={{ color: theme.color, backgroundColor: theme.background }}>
        B component button
      </button>
    </>
  );
};

export default B;
