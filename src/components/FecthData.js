import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FecthData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://www.mecallapi.com/api/users").then((result) => {
      const { data } = result;
      console.log(result.data);
      //   alert(JSON.stringify(result.data));
      setData(data);
    });
  }, []);

  return (
    <div>
      <h3>Fecth Data</h3>
      {/* <p>{JSON.stringify(data)} </p> */}
      <ul>
        <li style={{ listStyle: "none" }}>
          {data &&
            data.map((item, index) => <li key={index}>{item.username}</li>)}
        </li>
      </ul>
    </div>
  );
}
