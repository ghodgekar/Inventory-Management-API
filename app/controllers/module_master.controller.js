const db = require("../models");
const ModuleMaster = db.module_master;

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
  const module = new ModuleMaster(reqestData);
  module.save((err, response) => {
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
  ModuleMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
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
  ModuleMaster.findByIdAndUpdate({_id:reqestData._id}, {status: 0} ,{ new: true },(err, response) => {
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
  }
  ModuleMaster.find(query)
  .exec((err, response) => {
    response.forEach(val => {
      if(val['parent_madule_code'] == Object(val['_id'])){
        console.log(val['module_name'])
        response['parent_module_name'] = val['module_name'];
      }
    })
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

exports.menu = (req, res) => {
  try{
    ModuleMaster.find()
    .exec((err, data) => {
      if (err) {
        res.status(500).send({ message: err.message });
        return;
      }else{
        arr = f(data, 0)
        res.status(200).send({ data:arr, message: '' });
      }
    });
  }catch(e){
    res.status(400).send({ message: '' });
  }
};

function allmenu(nodes){
  var t = [];
  for (var i = 0; i < nodes.length; i++) {
      t[nodes[i].menu_id] = nodes[i].parent_madule_code;
  }
  return t;
}


function f(t, c) {
  var a = [];
  for (var i = 0; i < t.length; i++) {
      if (t[i] === c) {
          a.push({
              id: i,
              sub: f(t, i)
          });
      }
  }
  return a;
}

exports.parent_menu = (req, res) => {
  ModuleMaster.find({parent_madule_code: 0})
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};



exports.test = async (req, res) => {
  var initial = ModuleMaster.find();
  var menutree = await ModuleMaster.GetMenuTree(initial, null, '5dfe0009551b160edcdc89ce');
  res.status(200).send({ data:response, response: "" });
};

