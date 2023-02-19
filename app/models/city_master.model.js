const mongoose = require("mongoose");
const CityMaster = mongoose.model(
  "CityMaster",
  new mongoose.Schema({
    city_name: {type: String, index: true, unique: true},
    state_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CityMaster;