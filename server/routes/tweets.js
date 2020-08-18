const express = require("express");
const router = express.Router();
const tweet = require("../models/tweet");

const mongoose = require("mongoose");

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

router.get("/", async (req, res) => {
  tweet
    .find({}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
    .select("text");
});

//query db for specific words in the text field
router.get("/word/:id", async (req, res) => {
  let searchTerm = req.params.id;
  console.log(searchTerm);
  tweet
    .find(
      { text: { $regex: `${searchTerm}`, $options: "i" } },
      "id_str",
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    )
    .select("text");
});

module.exports = router;
