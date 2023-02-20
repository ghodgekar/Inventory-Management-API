const controller = require("../controllers/vendor_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/vendor/:id?", controller.list);
  app.post("/api/vendor/save", controller.save);
  app.post("/api/vendor/update", controller.update);
  app.post("/api/vendor/delete", controller.delete);
  app.post("/api/vendor/datatableList", controller.datatableList);
};