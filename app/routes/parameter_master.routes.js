const controller = require("../controllers/parameter_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/parameters/:id?", controller.list);
  app.post("/api/parameters/save", controller.save);
  app.post("/api/parameters/update", controller.update);
  app.post("/api/parameters/delete", controller.delete);

  app.get("/api/parametersByCode/:code?", controller.codeList);

};