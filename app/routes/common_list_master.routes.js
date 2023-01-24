const controller = require("../controllers/common_list_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/common_list/:id?", controller.list);
  app.post("/api/common_list/save", controller.save);
  app.post("/api/common_list/update", controller.update);
  app.post("/api/common_list/delete", controller.delete);
};