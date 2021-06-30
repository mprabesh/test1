const { json } = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const DATA = { name: "Prabesh", address: "Bharatpur", MOBILE: "1234567" };
const DATA1 = { name: "Sandesh", address: "Bharatpur", MOBILE: "984508" };

app.use(json());
app.get("/data", (req, res) => {
  res.json(DATA);
});

app.post("/get", (req, res) => {
  const a = req.body.data;
  console.log(a);
  if (!a) {
    res.json({ message: "please enter the value " });
  } else {
    if (a === "prabesh") {
      res.json({ message: "correct data" });
    } else {
      res.json({ message: "wrong  data" });
    }
  }
});

app.listen(PORT, () => {
  console.log("listening to port 8080");
});
