const controller = require("../controllers/category_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/category/:id?", controller.list);
  app.post("/api/category/save", controller.save);
  app.post("/api/category/update", controller.update);
  app.post("/api/category/delete", controller.delete);
};