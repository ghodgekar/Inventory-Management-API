const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const STATUS_SCHEMA = MONGOOSE.Schema({
    id: { type: NUMBER, required: true, unique: true },
    status_name: { type: STRING, required: true },
    status_type_id: { type: NUMBER, required: true },
    order_id: { type: NUMBER, required: true },
    is_active: { type: NUMBER, default: '1' }
});

const STATUS = MONGOOSE.model('Status', STATUS_SCHEMA);

module.exports = STATUS; 