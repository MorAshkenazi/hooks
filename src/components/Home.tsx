import { FunctionComponent, useEffect, useRef, useState } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  let [name, setName] = useState<string>("Mor Ashkenazi");
  let counter = useRef<number>(1);

  useEffect(() => {
    counter.current = counter.current + 1;
    console.log("1");
  });

  return (
    <>
      <p>App rendered {counter.current} times</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Home;
