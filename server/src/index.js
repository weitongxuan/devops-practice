const express = require("express");

const app = express();
const port = 8000;

app.get("/:name1", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:8000`);
});
