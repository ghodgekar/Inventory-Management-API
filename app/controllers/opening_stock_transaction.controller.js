const db = require("../models");
const OpeningStockTransaction = db.opening_stock_transaction;
const ItemBarcodeMaster = db.item_barcode_master;
const ItemMaster = db.item_master;

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
  let batch;
  let validationResult = validateForm(reqestData);
  if (!validationResult.success) {
    return res.status(400).json({
        message: 'Form validation failed!',
        errors: validationResult.errors
    });
  }

  
  let max_batch_codeQuery=OpeningStockTransaction.find({item_code: reqestData.item_code}).sort({batch_no:-1}).limit(1);
  let min_batch_code=OpeningStockTransaction.find({item_code: reqestData.item_code}).sort({batch_no:+1}).limit(1);

  // let max_batch_code;

  // max_batch_codeQuery.exec((err, response) => {
  //   max_batch_code = 'aa'
  // })

  // res.status(200).send({ data: max_batch_code, message: "Data Saved Successfully In openingstock Master" });
  // return;  

  // ItemBarcodeMaster.find({barcode : req.body.barcode})
  // .exec((err, response) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  //   ItemMaster.find({item_code:response[0].item_code}).exec((err, response2) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }
  //     if(response2.item_type == 'Pack' || response2.item_type == 'Varient'){
  //       if(min_batch_code=='')
  //       {
  //           batch=-1; 
  //       }
  //       elseif(min_batch_code)
  //       {
  //         batch=min_batch_code  - 1;
  //       }
  //     }
  //     if(response2.item_type == 'Loose'){
  //       if(max_batch_code=='')
  //       {
  //           batch=-99; 
  //       }
  //       elseif(max_batch_code)
  //       {
  //         batch=1+max_batch_code;
  //       }
  //     }
  //   });
  // });
  // reqestData.batch_no =  max_batch_code;
  res.status(200).send({ data: reqestData, message: "Data Saved Successfully In openingstock Master" });
  return;  
  const openingstock = new OpeningStockTransaction(reqestData);
  openingstock.save((err, response) => {
    if (err) {
    res.status(500).send({ message: err });
    return;
    }else {
    res.status(200).send({ data: reqestData, message: "Data Saved Successfully In openingstock Master" });
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
  OpeningStockTransaction.findByIdAndUpdate({_id:reqestData._id},reqestData,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ data:response, message: "Data Updated Successfully In openingstock Master"  });
      return;
    }
  });
};

exports.delete = (req, res) => {
  let reqestData = req.body;
  OpeningStockTransaction.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In openingstock Master"  });
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
  OpeningStockTransaction.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};


exports.barcodeList = (req, res) => {
  let query;
  if(req.params.barcode){
    query = {
      barcode : req.params.barcode
    };
  }
  ItemBarcodeMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    ItemMaster.find({item_code:response[0].item_code}).exec((err, response2) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({ data:response2, message: "" });
    });
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
  OpeningStockTransaction.find(query)
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
  OpeningStockTransaction.find(query)
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

  OpeningStockTransaction.count({}).exec( (err, c) => {
    recordsTotal = c;
    OpeningStockTransaction.count({ $and: querySearchId }).exec((err, c) => {
      recordsFiltered = c;
      if(c == 1){
        start = start - 1;
      }
      OpeningStockTransaction.find({  $and: querySearchId }).limit(limit).skip(start).sort({module_code: 'desc'}).exec( (err, results) => {
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