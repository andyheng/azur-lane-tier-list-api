// depdendencies
const express = require("express");
const app = express();
const router = express.Router();
// gives access to defined model and database methods (find, create, etc)
const database = require("../models");

// get all
router.get("/", (req, res) => {
  database.Ship.find()
    .then(foundAll => {
      res.json(foundAll);
    })
    .catch(err => {
      res.send(err);
    })
});

// create
router.post("/", (req, res) => {
  database.Ship.create(req.body)
    .then(created => {
      console.log(`${created.name} was added`);
      res.json(created);
    })
    .catch(err => {
      res.send(err);
    })
});

module.exports = router;