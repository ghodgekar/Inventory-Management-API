const mongoose = require("mongoose");
const Login = mongoose.model(
  "Login",
  new mongoose.Schema({
    user_code: String,
    user_name: String,
    user_pass : String,
    role: String,
    mobile: String,
    email : String,
    decode_pass : String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Date, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Date, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = Login;