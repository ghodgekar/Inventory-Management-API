const controller = require("../controllers/item_tax_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/item_tax/:id?", controller.list);
  app.post("/api/item_tax/save", controller.save);
  app.post("/api/item_tax/update", controller.update);
  app.post("/api/item_tax/delete", controller.delete);
  app.post("/api/item_tax/datatableList", controller.datatableList);
};