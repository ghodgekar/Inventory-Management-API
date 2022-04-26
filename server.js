const EXPRESS = require('express');

const CONFIG = require('./config/config');

const PORT = 8000;
let env = 'development';

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);
APP.use(EXPRESS.static("Uploads"));

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
APP.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});