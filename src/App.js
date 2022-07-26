import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // useState
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [rgb, setRgb] = useState([0, 0, 0]);

  // useEffect : life circle -> componentDidmount, componentDidupdate , componentWillUnmount
  useEffect(() => {
    const rgbElement = document.querySelector(".rgb");
    rgbElement.style.color = `rgb(${rgb.join(",")})`;
  });

  return (
    <div className="container">
      <div className="App">
        <div className="count">
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
        </div>

        <div className="rgb">
          <p>Random RGB: {rgb.join(",")}</p>
          <button
            onClick={() =>
              setRgb(
                rgb.map(() => {
                  return Math.floor(Math.random() * 256);
                })
              )
            }
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
