const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const app = express();
var corsOptions = {
  origin: "http://localhost:62390"
};
app.use('/uploads', express.static('uploads'));

app.use(fileupload());
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true, parameterLimit:100000000, limit:"50mb"}));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

//routes
require("./app/config/db.config");

require('./app/routes/login.routes')(app);

//masters
require('./app/routes/parameter_master.routes')(app);
require('./app/routes/common_list_master.routes')(app);
require('./app/routes/module_master.routes')(app);
require('./app/routes/company_master.routes')(app);
require('./app/routes/branch_master.routes')(app);

require('./app/routes/city_master.routes')(app);
require('./app/routes/state_master.routes')(app);
require('./app/routes/country_master.routes')(app);
require('./app/routes/user_master.routes')(app);
require('./app/routes/user_permission_master.routes')(app);

require('./app/routes/item_master.routes')(app);
require('./app/routes/category_master.routes')(app);
require('./app/routes/category_sub_master.routes')(app);
require('./app/routes/brand_master.routes')(app);
require('./app/routes/manufracturer_master.routes')(app);

require('./app/routes/tax_master.routes')(app);
require('./app/routes/item_tax_master.routes')(app);
require('./app/routes/payment_mode_master.routes')(app);
require('./app/routes/payment_incl_excl_master.routes')(app);
require('./app/routes/customer_master.routes')(app);
require('./app/routes/vendor_master.routes')(app);
require('./app/routes/item_level_scheme_master.routes')(app);


//transaction
require('./app/routes/opening_stock_transaction.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});