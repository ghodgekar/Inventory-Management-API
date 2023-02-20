const controller = require("../controllers/tax_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/tax/:id?", controller.list);
  app.post("/api/tax/save", controller.save);
  app.post("/api/tax/update", controller.update);
  app.post("/api/tax/delete", controller.delete);
  app.post("/api/tax/datatableList", controller.datatableList);
};