const controller = require("../controllers/company_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/company/:id?", controller.list);
  app.post("/api/company/save", controller.save);
  app.post("/api/company/update", controller.update);
  app.post("/api/company/delete", controller.delete);
};