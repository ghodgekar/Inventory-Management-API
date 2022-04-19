const MONGOOSE = require('mongoose');

MONGOOSE.Promise = global.Promise;

module.exports = (config) => {
    MONGOOSE.connect(config.connectionString);

    let db = MONGOOSE.connection;

    db.once('open', (err) => {
        if (err) {
            throw err;
        }

        console.log('MongoDB is ready!');
    });

    require('../app/api/models/status');
    require('../app/api/models/status_type');
    require('../app/api/models/role');
    require('../app/api/models/countries_states_cities');
    require('../app/api/models/driver');
    require('../app/api/models/driver_doc');
    require('../app/api/models/driver_history');
    // require('../models/User');
    // require('../models/Role').init();
    // require('../models/Receipt');
    // require('../models/Book');
    // require('../models/Comment');
};