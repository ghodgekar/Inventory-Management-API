const mongoose = require("mongoose");
const ItemLevelSchemeMaster = mongoose.model(
  "ItemLevelSchemeMaster",
  new mongoose.Schema({
    loc_code: {type: String, index: true, unique: true},
    promo_code: String,
    item_code: String,
    batch_no: String,
    from_date: String,
    to_date: String,
    from_time: {type: String, default: null},
    to_time: {type: String, default: null},
    from_qty: String,
    to_qty: String,
    max_qty: String,
    disc_perc: String,
    disc_amt: String,
    fix_rate: String,
    calc_on: String,
    cust_type_incl: String,
    cust_type_excl: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ItemLevelSchemeMaster;