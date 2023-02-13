const db = require("../models");
const CommonListMaster = db.common_list_master;

function validateForm(payload) {
  let errors = {};
  let isFormValid = true;
  if (!payload || typeof payload.list_code !== 'string' || payload.list_code.trim().length === 0) {
    isFormValid = false;
    errors.list_code = 'Please Provide Common List Code.';
  }
  if (!payload || typeof payload.list_value !== 'string' || payload.list_value.trim().length === 0) {
    isFormValid = false;
    errors.list_value = 'Please Provide Common List Value.';
  }
  if (!payload || typeof payload.list_desc !== 'string' || payload.list_desc.trim().length === 0) {
    isFormValid = false;
    errors.list_desc = 'Please Provide Common List Description.';
  }
  if (!payload || typeof payload.loc_code !== 'string' || payload.loc_code.trim().length === 0) {
    isFormValid = false;
    errors.loc_code = 'Please Provide Location.';
  }
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
  CommonListMaster.find({list_code : reqestData.list_code, list_value : reqestData.list_value})
  .exec((err, response) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if(response){
      return res.status(422).json({ message: "Common List Code and List Value Must Be Unique" });
    }else{
      const common_list = new CommonListMaster(reqestData);
      common_list.save((err, response) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }else {
        return res.status(200).send({ data: response, message: "Data Saved Successfully In Common List Master" });   
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
//   CommonListMaster.find({list_code : reqestData.list_code})
//   .exec((err, response) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     res.status(200).send({ message: "Common List Code Must Be Unique" });
//   });
  CommonListMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In Common List Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  CommonListMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
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
  CommonListMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

exports.codeList = (req, res) => {
  let query;
  if(req.params.code){
    query = {
      list_code : req.params.code
    };
  }
  CommonListMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};
