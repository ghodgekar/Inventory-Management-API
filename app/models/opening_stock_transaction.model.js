const mongoose = require("mongoose");
const OpeningStockTransaction = mongoose.model(
  "OpeningStockTransaction",
  new mongoose.Schema({
    loc_code: String,
    barcode: String,
    item_code: String,
    qty: String,
    mrp: String,
    sale_rate: String,
    cost_rate: String,
    dept_code: String,
    expiry_date: String,
    batch_no: String,
    doc_type: String,
    comp_code: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = OpeningStockTransaction;