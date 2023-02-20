const mongoose = require("mongoose");
const TaxMaster = mongoose.model(
  "TaxMaster",
  new mongoose.Schema({
    tax_type: String,
    tax_code: String,
    tax_name: String,
    tax_per: String,
    tax_indicator: String,
    igst: String,
    sgst: String,
    cgst: String,
    utgst: String,
    cess: String,
    cessperpiece: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = TaxMaster;