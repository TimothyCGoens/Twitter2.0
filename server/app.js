const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/Twitter-Tracker", {
  useNewURLParser: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

const tweetsRouter = require("./routes/tweets");
app.use("/tweets", tweetsRouter);

app.listen(8080, () => {
  console.log("server is a go!");
});
