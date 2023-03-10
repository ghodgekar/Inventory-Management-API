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
  ModuleMaster.find({module_code : reqestData.module_code, module_name : reqestData.module_name})
  .exec((err, response) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (response.length != 0) {
      return res.status(422).json({ message: "Module Code and Module Name Must Be Unique" });
    }else{
      const common_list = new ModuleMaster(reqestData);
      common_list.save((err, response1) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }else {
        return res.status(200).send({ data: response1, message: "Data Saved Successfully In Module Master" });   
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
  ModuleMaster.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In Module Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  ModuleMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In Module Master"  });
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
    ModuleMaster.find(query)
    .exec((err1, response1) => {
      response.forEach((val, index) => {
        if(val['parent_madule_code'] === response1[index]['module_code']){
          response1[index]['parent_module_name'] = response1[index]['module_name'];
        }
      })
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({ data:response1, message: "" });
    });
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

exports.datatableList = (req, res) => {
  let querySearchId = [];
  if(req.body.searchId){
    querySearchId.push({_id: req.body.searchId});
  }
  if(req.body.searchStatus){
    querySearchId.push({status: req.body.searchStatus });
  }
  if(req.body.searchModuleCode){
    querySearchId.push({module_code: req.body.searchModuleCode });
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

  ModuleMaster.count({}).exec( (err, c) => {
    recordsTotal = c;
    ModuleMaster.count({ $and: querySearchId }).exec((err, c) => {
      recordsFiltered = c;
      if(c == 1){
        start = start - 1;
      }
      ModuleMaster.find({  $and: querySearchId }).limit(limit).skip(start).sort({module_code: 'desc'}).exec( (err, results) => {
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