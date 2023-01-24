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
    status: {type: String, default: 'Yes'},
    created_by: String,
    updated_by: {type: String, default: null},
    created_at: {type: Number, default: Date.now},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = TaxMaster;