const mongoose = require("mongoose");
const BrandMaster = mongoose.model(
  "BrandMaster",
  new mongoose.Schema({
    brand_code: String,
    brand_name: String,
    manufact_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = BrandMaster;