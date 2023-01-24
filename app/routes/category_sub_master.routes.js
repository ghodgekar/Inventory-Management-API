const controller = require("../controllers/category_sub_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/category_sub/:id?", controller.list);
  app.post("/api/category_sub/save", controller.save);
  app.post("/api/category_sub/update", controller.update);
  app.post("/api/category_sub/delete", controller.delete);
};