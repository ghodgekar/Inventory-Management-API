const mongoose = require("mongoose");
const CategoryMaster = mongoose.model(
  "CategoryMaster",
  new mongoose.Schema({
    category_code: {type: String, index: true, unique: true},
    category_name: String,
    category_type: String,
    group: String,
    inventory: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CategoryMaster;