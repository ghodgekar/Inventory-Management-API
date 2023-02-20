const db = require("../models");
const CompanyMaster = db.company_master;

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
  CompanyMaster.find({comp_code : reqestData.comp_code})
  .exec((err, response) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (response.length != 0) {
      return res.status(422).json({ message: "Company Code Must Be Unique" });
    }else{
      const common_list = new CompanyMaster(reqestData);
      common_list.save((err, response1) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }else {
        return res.status(200).send({ data: response1, message: "Data Saved Successfully In Company Master" });   
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
  CompanyMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In company Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  CompanyMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In company Master"  });
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
  }
  CompanyMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

exports.pdf = (req, res) => {
  let query;
  if(req.params.id){
    query = {
      _id : req.params.id
    };
  }
  CompanyMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

exports.excel = (req, res) => {
  let query;
  if(req.params.id){
    query = {
      _id : req.params.id
    };
  }
  CompanyMaster.find(query)
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
  if(req.body.searchCompCode){
    querySearchId.push({comp_code: req.body.searchCompCode });
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

  CompanyMaster.count({}).exec( (err, c) => {
    recordsTotal = c;
    CompanyMaster.count({ $and: querySearchId }).exec((err, c) => {
      recordsFiltered = c;
      if(c == 1){
        start = start - 1;
      }
      CompanyMaster.find({  $and: querySearchId }).limit(limit).skip(start).sort({comp_code: 'desc'}).exec( (err, results) => {
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