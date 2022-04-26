const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const DATE = MONGOOSE.Schema.Types.Date;

const DRIVER_SCHEMA = MONGOOSE.Schema({
    driver_id: { type: NUMBER, required: true, unique: true},
    driver_name: { type: STRING, required: true },
    driver_phone: { type: NUMBER, required: true, unique: true },
    device_type: { type: NUMBER, required: true },
    driver_address: { type: STRING, required: true },
    driver_state: { type: NUMBER, required: true },
    driver_city: { type: STRING, required: true },
    driver_pincode: { type: NUMBER, required: true },
    driver_status: { type: NUMBER, default: '1' },
    is_active: { type: NUMBER, default: '1' },
    driver_created: { type: DATE, required: true, default:new Date() },
    driver_updated: { type: DATE, required: true, default:new Date() }
});

const DRIVER = MONGOOSE.model('Driver', DRIVER_SCHEMA);
module.exports = DRIVER;