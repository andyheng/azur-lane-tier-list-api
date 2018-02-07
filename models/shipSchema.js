// depdendencies
const mongoose = require("mongoose")

// define schema
const shipSchema = new mongoose.Schema({
  name: String,
  src: String,
  hullType: String,
  rarity: String,
  position: String,
  nation: String,
  details: {
    additionalGun: {
      type: Boolean,
      default: false
    },
    torpedo: {
      type: Boolean,
      default: false
    },
    barrage: {
      type: Boolean,
      default: false
    },
    antiAir: {
      type: Boolean,
      default: false
    },
    survival: {
      type: Boolean,
      default: false
    },
    recovery: {
      type: Boolean,
      default: false
    },
    persistentBuff: {
      type: Boolean,
      default: false
    },
    activationBuff: {
      type: Boolean,
      default: false
    },
    retrofit: {
      type: Boolean,
      default: false
    },
    limited: {
      type: Boolean,
      default: false
    },
  }
})

// create model
const Ship = mongoose.model("Ship", shipSchema);

// export for index
module.exports = Ship;