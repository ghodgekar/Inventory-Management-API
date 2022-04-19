const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;

const ROLE_SCHEMA = MONGOOSE.Schema({
    role: { type: STRING, required: true, unique: true },
    is_active: { type: NUMBER, default: '1' }
});

const ROLE = MONGOOSE.model('Role', ROLE_SCHEMA);

module.exports = ROLE;