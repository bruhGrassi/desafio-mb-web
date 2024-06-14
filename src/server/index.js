import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bruna!!!");
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
