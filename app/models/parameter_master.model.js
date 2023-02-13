const mongoose = require("mongoose");
const ParameterMaster = mongoose.model(
  "ParameterMaster",
  new mongoose.Schema({
    param_code: {type: String, unique: true},
    param_value: String,
    param_desc: String,
    data_type: {type: String, default: null},
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ParameterMaster;