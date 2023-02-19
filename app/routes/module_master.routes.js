const controller = require("../controllers/module_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/module/parent_menu", controller.parent_menu);
  app.get("/api/module/menu", controller.menu);
  app.get("/api/module/:id?", controller.list);
  app.post("/api/module/save", controller.save);
  app.post("/api/module/update", controller.update);
  app.post("/api/module/delete", controller.delete);
  app.post("/api/module/datatableList", controller.datatableList);
};