const controller = require("../controllers/opening_stock_transaction.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/opening_stock/:id?", controller.list);
  app.post("/api/opening_stock/save", controller.save);
  app.post("/api/opening_stock/update", controller.update);
  app.post("/api/opening_stock/delete", controller.delete);

  app.get("/api/opening_stockByCode/:code?", controller.codeList);

};