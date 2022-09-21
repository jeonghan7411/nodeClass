const express = require("express");
const mysql = require("mysql");
const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => console.log("Server Running...."));
