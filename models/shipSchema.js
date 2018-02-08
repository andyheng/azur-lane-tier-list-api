// depdendencies
const mongoose = require("mongoose")

// define schema
const shipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  src: {
    type: String,
    required: true,
    default: "https://i.imgur.com/cyLnXiO.jpg"
  },
  hullType: {
    type: String,
    required: true,
    default: "DD",
    enum: ["DD", "CL", "CA", "BB", "BC", "CV", "CVL", "AR"]
  },
  rarity: {
    type: String,
    required: true,
    default: "N",
    enum: ["N", "R", "SR", "SSR"]
  },
  position: {
    type: String,
    required: true,
    default: "Front",
    enum: ["Front", "Back"]
  },
  tier: {
    type: String,
    required: true,
    default: "T5",
    enum: ["T0", "T1", "T2", "T3", "T4", "T5"]
  },
  nation: {
    type: String,
    required: true,
    default: "Royal Navy",
    enum: ["Sakura Empire", "Eagle Union", "Royal Navy", "Metalblood", "Eastern Radiance", "North Union", "Universal"]
  },
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