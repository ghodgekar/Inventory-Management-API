const mongoose = require("mongoose");
const CompanyMaster = mongoose.model(
  "CompanyMaster",
  new mongoose.Schema({
    comp_id: String, 
    comp_code: String, 
    comp_name: String, 
    type: String, 
    addr1: String, 
    addr2: String, 
    addr3: String, 
    city: String, 
    state: String, 
    country: String, 
    std_code: String, 
    phone: String, 
    mobile: String, 
    gstin: String, 
    fassano: String, 
    cinno: String, 
    panno: String, 
    tanno: String, 
    lsttinpinno: String, 
    cstno: String, 
    coregnno: String, 
    coregndate: String, 
    druglicno: String, 
    importexport: String, 
    company_image: String, 
    status: String, 
    created_by: String,
    updated_by: {type: String, default: null},
    created_at: {type: Number, default: Date.now},
    updated_at: {type: Number, default: Date.now}

  },{
    versionKey: false
  })
);
module.exports = CompanyMaster;