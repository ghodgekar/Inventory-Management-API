const controller = require("../controllers/item_level_scheme_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/item_level_scheme/:id?", controller.list);
  app.post("/api/item_level_scheme/save", controller.save);
  app.post("/api/item_level_scheme/update", controller.update);
  app.post("/api/item_level_scheme/delete", controller.delete);
  app.post("/api/item_level_scheme/datatableList", controller.datatableList);
};