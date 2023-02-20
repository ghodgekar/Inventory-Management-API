const controller = require("../controllers/user_permission_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/user_permission/:id?", controller.list);
  app.post("/api/user_permission/save", controller.save);
  app.post("/api/user_permission/update", controller.update);
  app.post("/api/user_permission/delete", controller.delete);
  app.post("/api/user_permission/datatableList", controller.datatableList);
};