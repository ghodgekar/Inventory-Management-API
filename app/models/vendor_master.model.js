const mongoose = require("mongoose");
const VendorMaster = mongoose.model(
  "VendorMaster",
  new mongoose.Schema({
    vend_code: {type: String, index: true, unique: true},
    vend_name: String,
    type: String,
    credit_day: String,
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    pin_no: String,
    phone: String,
    email: String,
    gstin: String,
    fassi_no: String,
    aadhar_no: String,
    pan_no: String,
    contact_person: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = VendorMaster;