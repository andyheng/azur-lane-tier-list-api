// configure mongoose settings here

// dependencies
const mongoose = require("mongoose");
require('dotenv').config()

// setup
const uri = process.env.DB_URI;
mongoose.Promise = Promise;
mongoose.connect(uri, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// export for use in routing
module.exports.Ship = require("./shipSchema");