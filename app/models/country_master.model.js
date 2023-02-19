const mongoose = require("mongoose");
const CountryMaster = mongoose.model(
  "CountryMaster",
  new mongoose.Schema({
    country_code: {type: String, index: true, unique: true},
    country_name: String,
    currency_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CountryMaster;