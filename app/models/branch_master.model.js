const mongoose = require("mongoose");
const BranchMaster = mongoose.model(
  "BranchMaster",
  new mongoose.Schema({
    loc_code: {type: String, index: true, unique: true},
    loc_no: String,
    loc_name: String,
    comp_code: String,
    addr1: String,
    addr2: String,
    city: String,
    pin: String,
    phone_no: String,
    state_code: String,
    country_code: String,
    gstin: String,
    bank_code: String,
    bankacno: String,
    status: {type: Number, default: 1},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: String,
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = BranchMaster;