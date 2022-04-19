const COUNTRIES_STATES_CITIES = require('mongoose').model('Countries_states_cities');

module.exports = {
    getAllCountriesStatesCities: (req, res) => {
        COUNTRIES_STATES_CITIES.find({name:'India'},(error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
};