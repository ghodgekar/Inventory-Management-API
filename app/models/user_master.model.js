const date = require('date-and-time');
const currentDateTime = date.format(new Date(),'YYYY/MM/DD HH:mm:ss');
const mongoose = require("mongoose");
const UserMaster = mongoose.model(
  "UserMaster",
  new mongoose.Schema({
    user_code: {type: String, index: true, unique: true},
    user_name: String,
    user_pass: String,
    role: String,
    mobile: String,
    email: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: currentDateTime},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: currentDateTime}
  },{
    versionKey: false
  })
);
module.exports = UserMaster;