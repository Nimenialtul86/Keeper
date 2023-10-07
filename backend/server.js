const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/keeperDB")

const postRouter = require("./post");

app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });