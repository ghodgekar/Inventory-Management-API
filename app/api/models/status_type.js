const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const STATUS_TYPE_SCHEMA = MONGOOSE.Schema({
    id: { type: NUMBER, required: true, unique: true },
    status_code: { type: STRING, required: true },
    role_id: { type: NUMBER, required: true },
    is_active: { type: NUMBER, default: '1' }
});

const STATUS_TYPE = MONGOOSE.model('Status_type', STATUS_TYPE_SCHEMA);

module.exports = STATUS_TYPE; 