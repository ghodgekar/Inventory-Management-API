const mongoose = require("mongoose");
const ItemBarcodeMaster = mongoose.model(
  "ItemBarcodeMaster",
  new mongoose.Schema({
    item_code: String,
    barcode: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now},
    deactive_reason: {type: String, default: null},
    deactive_date: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ItemBarcodeMaster;