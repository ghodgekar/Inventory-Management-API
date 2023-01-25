const mongoose = require("mongoose");
const PaymentInclExclMaster = mongoose.model(
  "PaymentInclExclMaster",
  new mongoose.Schema({
    pmt_code: String,
    trans_type: String,
    trans_code: String,
    incl_excl: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = PaymentInclExclMaster;