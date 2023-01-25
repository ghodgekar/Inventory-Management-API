const mongoose = require("mongoose");
const ParameterMaster = mongoose.model(
  "ParameterMaster",
  new mongoose.Schema({
    param_code: {type: String},
    param_value: String,
    param_desc: String,
    data_type: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ParameterMaster;