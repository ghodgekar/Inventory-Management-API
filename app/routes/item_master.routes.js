const controller = require("../controllers/item_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/item/:id?", controller.list);
  app.post("/api/item/save", controller.save);
  app.post("/api/item/update", controller.update);
  app.post("/api/item/delete", controller.delete);
};