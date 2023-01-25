const controller = require("../controllers/customer_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/customer/:id?", controller.list);
  app.post("/api/customer/save", controller.save);
  app.post("/api/customer/update", controller.update);
  app.post("/api/customer/delete", controller.delete);
};