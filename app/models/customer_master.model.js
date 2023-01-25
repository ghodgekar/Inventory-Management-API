const mongoose = require("mongoose");
const CustomerMaster = mongoose.model(
  "CustomerMaster",
  new mongoose.Schema({
    cust_code: {type: String, index: true, unique: true},
    cust_name: String,
    gender: String,
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    mobile: String,
    email: String,
    aadhar_no: String,
    pan_no: String,
    gstin: String,
    birth_date: String,
    join_date: String,
    cust_type: String,
    barcode: String,
    points: String,
    ref_cust_code: String,
    cr_limit: String,
    cr_overdue_days: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CustomerMaster;