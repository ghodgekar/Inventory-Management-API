const controller = require("../controllers/city_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/city/:id?", controller.list);
  app.get("/api/getStateCountry/:city_name", controller.getStateCountry);
  app.post("/api/city/save", controller.save);
  app.post("/api/city/update", controller.update);
  app.post("/api/city/delete", controller.delete);
  app.post("/api/city/datatableList", controller.datatableList);
};