import React from "react";
import axios from "axios";

export default function Check() {
  const [data, setData] = React.useState("");
  const [show, setShow] = React.useState("");
  const handleChange = (e) => {
    const v = e.target.value;
    setData(v);
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(`/get`, { data })
      .then((res) => {
        console.log(res.data.message);
        setShow(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Main">
      <form>
        <input type="text" name="fvalue" value={data} onChange={handleChange} />
        <button onClick={handleClick}>Click</button>
      </form>
      <label>{show}</label>
    </div>
  );
}
