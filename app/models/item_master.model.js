const mongoose = require("mongoose");
const ItemMaster = mongoose.model(
  "ItemMaster",
  new mongoose.Schema({
    item_code: String,
    item_name: String,
    item_full_name: String,
    regional_name: String,
    item_UOM: String,
    item_weight: String,
    item_type: String,
    item_parent: String,
    pack_charge: String,
    on_mrp: String,
    label_reqd: String,
    qty_in_case: String,
    tax_code: String,
    sub_category_code: String,
    category_code: String,
    category_type: String,
    inventory: String,
    brand_code: String,
    manufact_code: String,
    markup: String,
    markdown: String,
    rate_upd: String,
    hsn: String,
    exp_req: String,
    shelf_life_period: String,
    shelf_life_dm: String,
    group1: String,
    group2: String,
    group3: String,
    group4: String,
    barcode: String,
    status: {type: String, default: 'Active'},
    created_by: String,
    created_at: {type: Number, default: Date.now},
    updated_by: {type: String, default: null},
    updated_at: {type: Number, default: Date.now},
    deactive_reason: {type: String, default: null},
    deactive_date: {type: Number, default: Date.now}
  },{
    versionKey: false
  })
);
module.exports = ItemMaster;