const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { addListener } = require("nodemon");

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello From Server");
}).listen(3000);

console.log("Listening on PORT 3000")