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
    state: String,
    country: String,
    pincode: String,
    phone: String,
    gstin: String,
    bank_name: String,
    bank_ac_no: String,
    image: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = BranchMaster;