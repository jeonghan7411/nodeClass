const express = require("express");
const path = require("path");
const board = require("./routes/board");

const app = express();
const PORT = 3000;

//사용 - app.use() middleware
app.use("/board", board);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
