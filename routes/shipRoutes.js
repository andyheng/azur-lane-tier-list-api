// depdendencies
const express = require("express");
const app = express();
// using routing
const router = express.Router();
// gives access to defined model and database methods (find, create, etc)
const database = require("../models");

router.get("/", (req, res) => {
  database.Ship.find()
    .then(foundAll => {
      res.json(foundAll);
    })
    .catch(err => {
      res.send(err);
    })
})

module.exports = router;