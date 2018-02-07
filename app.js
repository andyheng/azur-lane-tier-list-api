// Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Settings
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routing

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// main
app.get("/", (req, res) => res.send("Testing"));
app.listen(3000 || process.env.PORT, () => console.log("API started"));