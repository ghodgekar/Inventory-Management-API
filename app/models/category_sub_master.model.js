const mongoose = require("mongoose");
const CategorySubMaster = mongoose.model(
  "CategorySubMaster",
  new mongoose.Schema({
    sub_category_code: {type: String, index: true, unique: true},
    sub_category_name: String,
    category_code: String,
    markup: String,
    markdown: String,
    shelf_life_p: String,
    shelf_life_dm: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = CategorySubMaster;