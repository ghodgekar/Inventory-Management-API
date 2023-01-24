const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const app = express();
var corsOptions = {
  origin: "http://localhost:4200"
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
require('./app/routes/parameter_master.routes')(app);
require('./app/routes/common_list_master.routes')(app);
require('./app/routes/module_master.routes')(app);
require('./app/routes/company_master.routes')(app);
require('./app/routes/branch_master.routes')(app);
require('./app/routes/user_master.routes')(app);
require('./app/routes/user_permission_master.routes')(app);
require('./app/routes/category_master.routes')(app);
require('./app/routes/category_sub_master.routes')(app);
require('./app/routes/tax_master.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});