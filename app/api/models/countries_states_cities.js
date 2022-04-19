const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

const COUNTRIES_STATES_CITIES_SCHEMA = new Schema({}, { strict: false });

const COUNTRIES_STATES_CITIES = MONGOOSE.model('Countries_states_cities', COUNTRIES_STATES_CITIES_SCHEMA);

module.exports = COUNTRIES_STATES_CITIES;