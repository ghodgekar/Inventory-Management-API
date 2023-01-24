const mongoose = require("mongoose");
const CommonListMaster = mongoose.model(
  "CommonListMaster",
  new mongoose.Schema({
    list_code: String,
    list_value: String,
    list_desc: String,
    order_by: Number,
    loc_code: String,
    status: {type: Number, default: 1},
    created_by: String,
    updated_by: {type: String, default: null},
    created_at: {type: Number, default: Date.now},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CommonListMaster;