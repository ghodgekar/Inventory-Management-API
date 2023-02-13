const db = require("../models");
const ParameterMaster = db.parameter_master;

function validateForm(payload) {
  let errors = {};
  let isFormValid = true;
  if (!payload || typeof payload.param_code !== 'string' || payload.param_code.trim().length === 0) {
    isFormValid = false;
    errors.param_code = 'Please Provide Parameter Code.';
  }
  if (!payload || typeof payload.param_value !== 'string' || payload.param_value.trim().length === 0) {
    isFormValid = false;
    errors.param_value = 'Please Provide Parameter Value.';
  }
  if (!payload || typeof payload.param_desc !== 'string' || payload.param_desc.trim().length === 0) {
    isFormValid = false;
    errors.param_desc = 'Please Provide Parameter Description.';
  }
  if (!payload || typeof payload.data_type !== 'string' || payload.data_type.trim().length === 0) {
    isFormValid = false;
    errors.data_type = 'Please Provide Data Type.';
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
  ParameterMaster.find({param_code : reqestData.param_code})
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if(response){
      return res.status(422).send({ message: "Parameter Code Must Be Unique" });
    }else{
      const parameter = new ParameterMaster(reqestData);
      parameter.save((err, response) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }else {
        res.status(200).send({ data: response, message: "Data Saved Successfully In Parameter Master" });
        return;    
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
  // ParameterMaster.find({param_code : reqestData.param_code})
  // .exec((err, response) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  //   res.status(200).send({ message: "Parameter Code Must Be Unique" });
  // });
  ParameterMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In Parameter Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  ParameterMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In Parameter Master"  });
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
  ParameterMaster.find(query)
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
      param_code : req.params.code
    };
  }
  ParameterMaster.find(query)
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
  ParameterMaster.find(query)
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
  ParameterMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

