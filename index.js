const express = require("express");
const { resolve } = require("path");
const connectDatabase = require("./DB/database.js");
const menuRouter = require("./routes/menu.route.js");

const app = express();
const port = 3010;

app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.use("/menu", menuRouter);

app.listen(port, () => {
  connectDatabase();
  console.log(`Example app listening at http://localhost:${port}`);
});
