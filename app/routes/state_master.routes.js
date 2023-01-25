const controller = require("../controllers/state_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/state/:id?", controller.list);
  app.post("/api/state/save", controller.save);
  app.post("/api/state/update", controller.update);
  app.post("/api/state/delete", controller.delete);
};