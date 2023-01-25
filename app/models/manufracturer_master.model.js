const mongoose = require("mongoose");
const ManufracturerMaster = mongoose.model(
  "ManufracturerMaster",
  new mongoose.Schema({
    manufact_code: String,
    manufact_name: String,
    type : String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ManufracturerMaster;