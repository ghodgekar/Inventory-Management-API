const controller = require("../controllers/brand_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/brand/:id?", controller.list);
  app.post("/api/brand/save", controller.save);
  app.post("/api/brand/update", controller.update);
  app.post("/api/brand/delete", controller.delete);
  app.post("/api/brand/datatableList", controller.datatableList);
};