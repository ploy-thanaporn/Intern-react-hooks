import React, { useCallback, useState } from "react";

export default function Callback() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Content id={count} />
    </div>
  );
}
const Content = ({ id }) => {
  console.log("Re=render");
  const handleClick = useCallback(() => {
    console.log("Click");
  }, []);

  return (
    <div>
      <p>Demo {id}</p>
      <button onClick={handleClick} style={{ marginBottom: "40px" }}>
        Test
      </button>
    </div>
  );
};
// callback : cashing  function
// memo return เป็นค่าที่ได้จากการคำนวณในฟังก์ชัน แต่ callback เป็นการ return callback function
