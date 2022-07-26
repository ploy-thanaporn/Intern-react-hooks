import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
          setTitle("React Hook");
        }}
      >
        ADD
      </button>
      <div className="">
        UseState : {count}
        <p>Title: {title}</p>
      </div>
    </div>
  );
}

export default App;
