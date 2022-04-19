const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const REASON_SCHEMA = MONGOOSE.Schema({
    reason_text: { type: STRING, required: true, unique: true },
    reason_type: { type: NUMBER, required: true, unique: true },
    is_active: { type: NUMBER, default: '1' }
});

const REASON = MONGOOSE.model('Reason', REASON_SCHEMA);

module.exports = REASON;