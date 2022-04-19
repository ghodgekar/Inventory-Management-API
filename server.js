const EXPRESS = require('express');

const CONFIG = require('./config/config');

const PORT = 8000;
let env = 'development';

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);

APP.listen(process.env.PORT || 8081);
console.log(`Server is listening on port ${PORT}`);