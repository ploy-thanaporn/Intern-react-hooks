import "./App.css";
import { useEffect, useState } from "react";
// import Form from "./components/Form";
import FormTwo from "./components/Formtwo";
import Count from "./components/Count";
import FecthData from "./components/FecthData";

function App() {
  // useState
  const [isShow, setIsShow] = useState(true);
  const [rgb, setRgb] = useState([0, 0, 0]);

  // useEffect : life circle -> componentDidmount, componentDidupdate , componentWillUnmount
  // component ที่เกิดการอัพเดค ทำให้ต้อง render ใหม่ เช่น props , state

  // useEffect(() => {
  //   //called whenever state is changed
  //   effect

  //   return () => {
  //   //called when component is deleted ()
  //   //called when component is deleted ()
  //     cleanup
  //   }
  // }, [input])  //ดักการเปลี่ยนแปลง state ตัวไหน ถ้าไม่ระบุ มันจะรันโค้ดแค่ครั้งเดียว

  useEffect(() => {
    const rgbElement = document.querySelector(".rgb");
    rgbElement.style.color = `rgb(${rgb.join(",")})`;
  });

  return (
    <div className="container">
      <div className="App">
        <div className="count">
          {isShow && <Count />}
          <button
            style={{ marginLeft: "8px" }}
            onClick={() => setIsShow(false)}
          >
            HIDE
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
        <div className="form">
          {/* <Form /> */}
          <FormTwo />
        </div>
        <FecthData />
      </div>
    </div>
  );
}

export default App;
