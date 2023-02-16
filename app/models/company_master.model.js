const mongoose = require("mongoose");
const CompanyMaster = mongoose.model(
  "CompanyMaster",
  new mongoose.Schema({
    comp_code: String, 
    comp_name: String, 
    type: String, 
    addr1: String, 
    addr2: String, 
    addr3: String, 
    city: String, 
    state: String, 
    country: String, 
    pincode: String, 
    std_code: String, 
    phone: String, 
    mobile: String, 
    gstin: String, 
    fassa_no: String, 
    cin_no: String, 
    pan_no: String, 
    tan_no: String, 
    lsttinpin_no: String, 
    cst_no: String, 
    coregn_no: String, 
    coregndate: String, 
    druglic_no: String, 
    importexport: String, 
    company_image: String, 
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CompanyMaster;