const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const DATE = MONGOOSE.Schema.Types.Date;

const DRIVER_HISTORY_SCHEMA = MONGOOSE.Schema({
    driver_id: { type: NUMBER, required: true},
    status_type_id: { type: NUMBER, required: true },
    status_name: { type: STRING, required: true },
    created: { type: DATE, required: true, default:new Date() }
});

const DRIVER_HISTORY = MONGOOSE.model('DriverHistory', DRIVER_HISTORY_SCHEMA);
module.exports = DRIVER_HISTORY;