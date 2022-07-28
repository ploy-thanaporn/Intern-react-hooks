import React, { useMemo, useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Content a={1} b={count} />
    </div>
  );
}
const Content = ({ a, b }) => {
  const memorizedRandom = useMemo(() => {
    return Math.random();
  }, [a]);

  const random = Math.random();

  return (
    <div>
      <p>
        A: {a}, B: {b}
      </p>

      <p>Random: {random}</p>
      <p>MemorizedRandom: {memorizedRandom}</p>
    </div>
  );
};

// useMemo มักใช้ในการ optimize , cashing value
