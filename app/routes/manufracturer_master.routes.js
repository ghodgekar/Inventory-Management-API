const controller = require("../controllers/manufracturer_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/manufracturer/:id?", controller.list);
  app.post("/api/manufracturer/save", controller.save);
  app.post("/api/manufracturer/update", controller.update);
  app.post("/api/manufracturer/delete", controller.delete);
};