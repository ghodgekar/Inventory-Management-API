const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.parameter_master = require("./parameter_master.model");
db.common_list_master = require("./common_list_master.model");
db.module_master = require("./module_master.model");
db.branch_master = require("./branch_master.model");
db.company_master = require("./company_master.model");
db.user_master = require("./user_master.model");
db.user_permission_master = require("./user_permission_master.model");
db.category_master = require("./category_master.model");
db.category_sub_master = require("./category_sub_master.model");
db.tax_master = require("./tax_master.model");
module.exports = db;