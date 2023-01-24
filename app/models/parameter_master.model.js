const mongoose = require("mongoose");
const ParameterMaster = mongoose.model(
  "ParameterMaster",
  new mongoose.Schema({
    param_code: {type: String, index: true, unique: true},
    param_value: String,
    param_desc: String,
    data_type: String,
    status: {type: Number, default: 1},
    created_by: String,
    created_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ParameterMaster;