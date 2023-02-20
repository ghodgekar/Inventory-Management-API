const db = require("../models");
const BranchMaster = db.branch_master;

function validateForm(payload) {
  let errors = {};
  let isFormValid = true;
  return {
      success: isFormValid,
      errors
  };
}

exports.save = (req, res) => {
  let reqestData = req.body;
  let validationResult = validateForm(reqestData);
  if (!validationResult.success) {
    return res.status(400).json({
        message: 'Form validation failed!',
        errors: validationResult.errors
    });
  }
  BranchMaster.find({loc_code : reqestData.loc_code})
  .exec((err, response) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (response.length != 0) {
      return res.status(422).json({ message: "Branch Code Must Be Unique" });
    }else{
      const common_list = new BranchMaster(reqestData);
      common_list.save((err, response1) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }else {
        return res.status(200).send({ data: response1, message: "Data Saved Successfully In Branch Master" });   
        }
      });
    }
  });
};

exports.update = (req, res) => {
  let reqestData = req.body;
  let validationResult = validateForm(reqestData);
  if (!validationResult.success) {
    return res.status(400).json({
        message: 'Form validation failed!',
        errors: validationResult.errors
    });
  }
//   BranchMaster.find({list_code : reqestData.list_code})
//   .exec((err, response) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     res.status(200).send({ message: "Common List Code Must Be Unique" });
//   });
  BranchMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In Branch Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  BranchMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In Common List Master"  });
      return;
    }
  });
};

exports.list = (req, res) => {
  let query;
  if(req.params.id){
    query = {
      _id : req.params.id
    };
  }else{
    query = {
      status : 'Active'
    };
  }
  BranchMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

exports.datatableList = (req, res) => {
  let querySearchId = [];
  if(req.body.searchId){
    querySearchId.push({_id: req.body.searchId});
  }
  if(req.body.searchStatus){
    querySearchId.push({status: req.body.searchStatus });
  }
  if(req.body.searchLocCode){
    querySearchId.push({loc_code: req.body.searchLocCode });
  }
  if(req.body.searchLocNo){
    querySearchId.push({loc_no: req.body.searchLocNo });
  }
  if(req.body.searchLocName){
    querySearchId.push({loc_name: req.body.searchLocName });
  }
  if(req.body.searchCompCode){
    querySearchId.push({comp_code: req.body.searchCompCode });
  }
  if(req.body.searchAddr1){
    querySearchId.push({addr1: req.body.searchAddr1 });
  }
  if(req.body.searchAddr2){
    querySearchId.push({addr2: req.body.searchAddr2 });
  }
  if(req.body.searchCity){
    querySearchId.push({city: req.body.searchCity });
  }
  if(req.body.searchState){
    querySearchId.push({state: req.body.searchState });
  }
  if(req.body.searchCountry){
    querySearchId.push({country: req.body.searchCountry });
  }
  if(req.body.searchPinCode){
    querySearchId.push({pincode: req.body.searchPinCode });
  }
  if(req.body.searchPhone){
    querySearchId.push({phone: req.body.searchPhone });
  }
  if(req.body.searchGstin){
    querySearchId.push({gstin: req.body.searchGstin });
  }
  if(req.body.searchBankName){
    querySearchId.push({bank_name: req.body.searchBankName });
  }
  if(req.body.searchBankAcNo){
    querySearchId.push({bank_ac_no: req.body.searchBankAcNo });
  }
  if(req.body.searchCreatedBy){
    querySearchId.push({created_by: req.body.searchCreatedBy });
  }
  if(req.body.searchCreatedAt){
    querySearchId.push({created_at: req.body.searchCreatedAt });
  }
  if(req.body.searchUpdatedBy){
    querySearchId.push({updated_by: req.body.searchUpdatedBy });
  }
  if(req.body.searchUpdatedAt){
    querySearchId.push({updated_at: req.body.searchUpdatedAt });
  }
  var recordsTotal    = 0;
  var recordsFiltered = 0;
  var limit           = req.body.length;
  var start           = req.body.start >= 1 ? req.body.start : 1;

  BranchMaster.count({}).exec( (err, c) => {
    recordsTotal = c;
    BranchMaster.count({ $and: querySearchId }).exec((err, c) => {
      recordsFiltered = c;
      if(c == 1){
        start = start - 1;
      }
      BranchMaster.find({  $and: querySearchId }).limit(limit).skip(start).sort({loc_code: 'desc'}).exec( (err, results) => {
        if (err) {
          return;
        }
        var data = JSON.stringify({
          "draw"            : req.body.draw,
          "recordsFiltered" : recordsFiltered,
          "recordsTotal"    : recordsTotal,
          "data"            : results
        });
        res.send(data);
      });
    });
  });
}