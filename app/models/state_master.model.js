const mongoose = require("mongoose");
const StateMaster = mongoose.model(
  "StateMaster",
  new mongoose.Schema({
    state_code: {type: String, index: true, unique: true},
    state_name: String,
    country_code: String,
    state_type: String,
    gst_state_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = StateMaster;