import React, { useState, useEffect } from "react";
import G from "./Component/Check";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/data`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {" "}
      <div className="App">
        <h1>Hello World</h1>
        <h2>{data.name}</h2>
        <h2>{data.MOBILE}</h2>
        <h2>{data.address}</h2>
      </div>
      <G />
    </>
  );
}

export default App;
