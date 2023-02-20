const db = require("../models");
const ManufracturerMaster = db.manufracturer_master;

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
  // ManufracturerMaster.find({param_code : reqestData.param_code})
  // .exec((err, response) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  //   res.status(200).send({ message: "manufracturer Code Must Be Unique" });
  // });
  const manufracturer = new ManufracturerMaster(reqestData);
  manufracturer.save((err, response) => {
    if (err) {
    res.status(500).send({ message: err });
    return;
    }else {
    res.status(200).send({ data: response, message: "Data Saved Successfully In manufracturer Master" });
    return;    
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
  // ManufracturerMaster.find({param_code : reqestData.param_code})
  // .exec((err, response) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  //   res.status(200).send({ message: "manufracturer Code Must Be Unique" });
  // });
  ManufracturerMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In manufracturer Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  ManufracturerMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In manufracturer Master"  });
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
  ManufracturerMaster.find(query)
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
  }else{
    query = {
      status : 'Active'
    };
  }
  ManufracturerMaster.find(query)
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
  }else{
    query = {
      status : 'Active'
    };
  }
  ManufracturerMaster.find(query)
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
  if(req.body.searchManfCode){
    querySearchId.push({manufact_code: req.body.searchManfCode });
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

  ManufracturerMaster.count({}).exec( (err, c) => {
    recordsTotal = c;
    ManufracturerMaster.count({ $and: querySearchId }).exec((err, c) => {
      recordsFiltered = c;
      if(c == 1){
        start = start - 1;
      }
      ManufracturerMaster.find({  $and: querySearchId }).limit(limit).skip(start).sort({manufact_code: 'desc'}).exec( (err, results) => {
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