const mongoose = require("mongoose");
const UserMaster = mongoose.model(
  "UserMaster",
  new mongoose.Schema({
    user_code: {type: String, index: true, unique: true},
    user_name: String,
    password: String,
    role: String,
    mobile: String,
    email: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = UserMaster;