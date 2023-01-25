const db = require("../models");
const UserMaster = db.user_master;
const Login = db.login;

function validateForm(payload) {
  let errors = {};
  let isFormValid = true;
  if (!payload || typeof payload.user_code !== 'string' || payload.user_code.trim().length === 0) {
    isFormValid = false;
    errors.user_code = 'Please Provide Code.';
  }
  if (!payload || typeof payload.user_name !== 'string' || payload.user_name.trim().length === 0) {
    isFormValid = false;
    errors.user_name = 'Please Provide Username.';
  }
  if (!payload || typeof payload.user_pass !== 'string' || payload.user_pass.trim().length === 0) {
    isFormValid = false;
    errors.user_pass = 'Please Provide Password.';
  }
  if (!payload || typeof payload.role !== 'string' || payload.role.trim().length === 0) {
    isFormValid = false;
    errors.role = 'Please Provide Role.';
  }
  if (!payload || typeof payload.mobile !== 'string' || payload.mobile.trim().length === 0) {
    isFormValid = false;
    errors.mobile = 'Please Provide Mobile No.';
  }
  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please Provide Email Id.';
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
  const login = new Login(reqestData);
  login.save((err, response) => {
    if (err) {
    res.status(500).send({ message: err });
    return;
    }
  });

  const user = new UserMaster(reqestData);
  user.save((err, response) => {
    if (err) {
    res.status(500).send({ message: err });
    return;
    }else {
    res.status(200).send({ data: response, message: "Data Saved Successfully In user Master" });
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
  UserMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In user Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  UserMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In user Master"  });
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
  UserMaster.find(query)
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
  UserMaster.find(query)
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
  UserMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

