const controller = require("../controllers/payment_mode_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/payment_mode/:id?", controller.list);
  app.post("/api/payment_mode/save", controller.save);
  app.post("/api/payment_mode/update", controller.update);
  app.post("/api/payment_mode/delete", controller.delete);
};