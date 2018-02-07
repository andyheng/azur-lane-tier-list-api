// configure mongoose settings here

// dependencies
const mongoose = require("mongoose");

// setup
const uri = "mongodb://localhost/al-api";
mongoose.Promise = Promise;
mongoose.connect(uri, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// export for use in routing
module.exports.Ship = require("./shipSchema");