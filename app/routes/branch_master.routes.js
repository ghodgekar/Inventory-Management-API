const controller = require("../controllers/branch_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/branch/:id?", controller.list);
  app.post("/api/branch/save", controller.save);
  app.post("/api/branch/update", controller.update);
  app.post("/api/branch/delete", controller.delete);
  app.post("/api/branch/datatableList", controller.datatableList);
};