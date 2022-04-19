const MONGOOSE = require('mongoose');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const DATE = MONGOOSE.Schema.Types.Date;

const DRIVER_DOC_SCHEMA = MONGOOSE.Schema({
    driver_id: { type: NUMBER, required: true},
    driver_doc_id: { type: NUMBER, required: true },
    driver_doc_file_name: { type: STRING, required: true },
    is_active: { type: NUMBER, default: '1' }
});

const DRIVER_DOC = MONGOOSE.model('DriverDoc', DRIVER_DOC_SCHEMA);
module.exports = DRIVER_DOC;