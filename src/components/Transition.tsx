import { FunctionComponent, useState, useTransition } from "react";

interface TransitionProps {}

const Transition: FunctionComponent<TransitionProps> = () => {
  //   const [counter, setCounter] = useState<number>(0);
  const [posts, setPosts] = useState<any>([]);
  const [isPending, startTransition] = useTransition();

  const inc = () => {
    startTransition(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => setPosts(posts))
        .catch((err) => console.log(err));
    });
  };
  return (
    <>
      <br />
      {isPending && <p>Loading...</p>}
      <button className="btn btn-info" onClick={inc}>
        posts
      </button>
      <ul>
        {posts.map((p: any) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Transition;
