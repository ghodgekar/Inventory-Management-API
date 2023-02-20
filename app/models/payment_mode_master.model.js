const mongoose = require("mongoose");
const PaymentModeMaster = mongoose.model(
  "PaymentModeMaster",
  new mongoose.Schema({
    pmt_code: {type: String, index: true, unique: true},
    pmt_name: String,
    calc_on: String,
    charge_per: String,
    allow_multi: String,
    bill_copy: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = PaymentModeMaster;