const db = require("../models");
const BranchMaster = db.branch_master;

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
  if (!payload || typeof payload.order_by !== 'string' || payload.order_by.trim().length === 0) {
    isFormValid = false;
    errors.order_by = 'Please Provide Data Type.';
  }
  if (!payload || typeof payload.loc_code !== 'string' || payload.loc_code.trim().length === 0) {
    isFormValid = false;
    errors.loc_code = 'Please Provide Data Type.';
  }
  if (!payload || typeof payload.status !== 'string' || payload.status.trim().length === 0) {
    isFormValid = false;
    errors.status = 'Please Provide Data Type.';
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
//   BranchMaster.find({list_code : reqestData.list_code})
//   .exec((err, response) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     res.status(200).send({ message: "Common List Code Must Be Unique" });
//   });
  const common_list = new BranchMaster(reqestData);
  common_list.save((err, response) => {
    if (err) {
    res.status(500).send({ message: err });
    return;
    }else {
    res.status(200).send({ data: response, message: "Data Saved Successfully In Common List Master" });
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
      res.status(200).send({ data:response, message: "Data Updated Successfully In Common List Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  BranchMaster.findByIdAndUpdate({_id:reqestData._id}, {status: 0} ,{ new: true },(err, response) => {
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
      status : 1
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

