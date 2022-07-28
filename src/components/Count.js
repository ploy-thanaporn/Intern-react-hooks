import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = "Current count: " + count;

    return () => {
      document.title = "destroyed";
    };
  }, [count]);

  return (
    <>
      <p>Title: {title}</p>
      <p>UseState (count): {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setTitle("React Hook");
        }}
      >
        ADD
      </button>
    </>
  );
}
