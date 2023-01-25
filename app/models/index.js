const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.parameter_master = require("./parameter_master.model");
db.common_list_master = require("./common_list_master.model");
db.module_master = require("./module_master.model");
db.branch_master = require("./branch_master.model");
db.company_master = require("./company_master.model");

db.city_master = require("./city_master.model");
db.state_master = require("./state_master.model");
db.country_master = require("./country_master.model");
db.user_master = require("./user_master.model");
db.user_permission_master = require("./user_permission_master.model");

db.item_master = require("./item_master.model");
db.category_master = require("./category_master.model");
db.category_sub_master = require("./category_sub_master.model");
db.brand_master = require("./brand_master.model");
db.manufracturer_master = require("./manufracturer_master.model");

db.tax_master = require("./tax_master.model");
db.item_tax_master = require("./item_tax_master.model");
db.payment_mode_master = require("./payment_mode_master.model");
db.payment_incl_excl_master = require("./payment_incl_excl_master.model");
db.customer_master = require("./customer_master.model");
db.vendor_master = require("./vendor_master.model");
db.item_level_scheme_master = require("./item_level_scheme_master.model");

module.exports = db;