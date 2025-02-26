const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World 111!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
