const mongoose = require("mongoose");
const UserPermissionMaster = mongoose.model(
  "UserPermissionMaster",
  new mongoose.Schema({
    user_code: String,
    module_code: String,
    is_open: String,
    is_entry: String,
    is_modify: String,
    is_auth: String,
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = UserPermissionMaster;