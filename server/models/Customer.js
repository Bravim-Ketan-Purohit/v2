const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // -------------------
  redBloodCellCount: {
    type: Number,
    required: true,
  },
  hemoglobin: {
    type: Number,
    required: true,
  },
  hematocrit: {
    type: Number,
    required: true,
  },
  meanCorpuscularVolume: {
    type: Number,
    required: true,
  },
  meanCorpuscularHemoglobin: {
    type: Number,
    required: true,
  },
  meanCorpuscularHemoglobinConcentration: {
    type: Number,
    required: true,
  },
  whiteBloodCellCount: {
    type: Number,
    required: true,
  },
  plateletCount: {
    type: Number,
    required: true,
  },
  // -----------
  details: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);