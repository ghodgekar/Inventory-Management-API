const mongoose = require("mongoose");
const ItemTaxMaster = mongoose.model(
  "ItemTaxMaster",
  new mongoose.Schema({
    item_code: String,
    tax_code: String,
    start_date: String,
    end_date: String,
    state_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ItemTaxMaster;