const db = require("../models");
const ItemMaster = db.item_master;
const ItemBarcodeMaster = db.item_barcode_master;
const ItemTaxMaster = db.item_tax_master;

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
  const item = new ItemMaster({item_code: reqestData.item_code, item_name: reqestData.item_name,item_full_name: reqestData.item_full_name,regional_name: reqestData.regional_name,item_UOM: reqestData.item_UOM,item_weight: reqestData.item_weight,item_type: reqestData.item_type,item_parent: reqestData.item_parent,pack_charge: reqestData.pack_charge,on_mrp: reqestData.on_mrp,label_reqd: reqestData.label_reqd,qty_in_case: reqestData.qty_in_case,tax_code: reqestData.tax_code,sub_category_code: reqestData.sub_category_code,category_code: reqestData.category_code,category_type: reqestData.category_type,inventory: reqestData.inventory,brand_code: reqestData.brand_code,manufact_code: reqestData.manufact_code,markup: reqestData.markup,markdown: reqestData.markdown,rate_upd: reqestData.rate_upd,hsn: reqestData.hsn,exp_req: reqestData.exp_req,shelf_life_period: reqestData.shelf_life_period,shelf_life_dm: reqestData.shelf_life_dm,group1: reqestData.group1,group2: reqestData.group2,group3: reqestData.group3,group4: reqestData.group4,created_by:reqestData.created_by});
  item.save((err, response) => {
    if (err) {
    return res.status(500).send({ message: err });
    }
  });

  const itemtax = new ItemTaxMaster({item_code: reqestData.item_code, tax_code: reqestData.tax_code, start_date:new Date(), end_date:new Date(), state_code:'Maharashtra'});
  itemtax.save((err, response) => {
    if (err) {
    res.status(500).send({ message: itemtax });
    return;
    }
  });

  reqestData.barcodes.forEach(element => {
    const itembarcode = new ItemBarcodeMaster({item_code: reqestData.item_code, barcode: element.barcode, created_by: reqestData.created_by});
    itembarcode.save((err, response) => {
      if (err) {
      res.status(500).send({ message: itembarcode });
      return;
      }
    });
  });
  
  res.status(200).send({ data: '', message: "Data Saved Successfully In item Master" });
  return;
  
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
  ItemMaster.findByIdAndUpdate({_id:reqestData._id},{item_code: reqestData.item_code, item_name: reqestData.item_name,item_full_name: reqestData.item_full_name,regional_name: reqestData.regional_name,item_UOM: reqestData.item_UOM,item_weight: reqestData.item_weight,item_type: reqestData.item_type,item_parent: reqestData.item_parent,pack_charge: reqestData.pack_charge,on_mrp: reqestData.on_mrp,label_reqd: reqestData.label_reqd,qty_in_case: reqestData.qty_in_case,tax_code: reqestData.tax_code,sub_category_code: reqestData.sub_category_code,category_code: reqestData.category_code,category_type: reqestData.category_type,inventory: reqestData.inventory,brand_code: reqestData.brand_code,manufact_code: reqestData.manufact_code,markup: reqestData.markup,markdown: reqestData.markdown,rate_upd: reqestData.rate_upd,hsn: reqestData.hsn,exp_req: reqestData.exp_req,shelf_life_period: reqestData.shelf_life_period,shelf_life_dm: reqestData.shelf_life_dm,group1: reqestData.group1,group2: reqestData.group2,group3: reqestData.group3,group4: reqestData.group4,created_by:reqestData.created_by},{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  ItemBarcodeMaster.findByIdAndUpdate({item_code:reqestData.item_code}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  reqestData.barcodes.forEach(element => {
    const itembarcode = new ItemBarcodeMaster({item_code: reqestData.item_code, barcode: element.barcode, created_by: reqestData.created_by});
    itembarcode.save((err, response) => {
      if (err) {
      res.status(500).send({ message: itembarcode });
      return;
      }
    });
  });
  
  res.status(200).send({ data: '', message: "Data Updated Successfully In item Master" });
  return;

};

exports.delete = (req, res) => {
  let reqestData = req.body;
  ItemMaster.findByIdAndUpdate({_id:reqestData._id}, {status : 'Inactive'} ,{ new: true },(err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
      res.status(200).send({ message: "Data Deleted In item Master"  });
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
  ItemMaster.find(query)
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
  ItemMaster.find(query)
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
  ItemMaster.find(query)
  .exec((err, response) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ data:response, message: "" });
  });
};

