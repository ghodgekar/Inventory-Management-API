const mongoose = require("mongoose");
const CommonListMaster = mongoose.model(
  "CommonListMaster",
  new mongoose.Schema({
    list_code: String,
    list_value: String,
    list_desc: String,
    order_by: {type: Number, default: null},
    loc_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CommonListMaster;