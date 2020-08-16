const express = require("express");
const router = express.Router();
const tweet = require("../models/tweet");
const kitten = require("../models/kitten");

const mongoose = require("mongoose");

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

router.get("/", async (req, res) => {
  tweet.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
