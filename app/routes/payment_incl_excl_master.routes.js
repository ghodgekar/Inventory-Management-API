const controller = require("../controllers/payment_incl_excl_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/payment_incl_excl/:id?", controller.list);
  app.post("/api/payment_incl_excl/save", controller.save);
  app.post("/api/payment_incl_excl/update", controller.update);
  app.post("/api/payment_incl_excl/delete", controller.delete);
  app.post("/api/payment_incl_excl/datatableList", controller.datatableList);
};