const express = require("express");
const app = express();
const path = require("path");
const user = require("./routes/user");
const boarder = require("./routes/boarder");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/assets/css")));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.static(path.join(__dirname, "/assets/js")));

app.use("/", user);
app.use("/", boarder);

app.listen(3000, () => console.log("Server Running...."));
