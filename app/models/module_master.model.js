const mongoose = require("mongoose");
const ModuleMaster = mongoose.model(
  "ModuleMaster",
  new mongoose.Schema({
    module_code: String,
    module_name: String,
    module_slug: String,
    parent_madule_code: String,
    module_image: String,
    is_home: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ModuleMaster;