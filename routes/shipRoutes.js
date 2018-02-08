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

// get 1
router.get("/:id", (req, res) => {
  database.Ship.findById(req.params.id)
    .then(foundItem => {
      console.log(`Showing found item: ${foundItem.name}`);
      res.json(foundItem);
    })
    .catch(err => {
      res.json(err);
    })
})

// edit
router.put("/:id", (req, res) => {
  database.Ship.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedItem => {
      console.log(`Updated: ${updatedItem.name}`);
      res.json(updatedItem)
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;