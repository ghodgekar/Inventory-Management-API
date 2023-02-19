const controller = require("../controllers/country_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/country/:id?", controller.list);
  app.post("/api/country/save", controller.save);
  app.post("/api/country/update", controller.update);
  app.post("/api/country/delete", controller.delete);
  app.post("/api/country/datatableList", controller.datatableList);
};