const controller = require("../controllers/user_master.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/user/:id?", controller.list);
  app.post("/api/user/save", controller.save);
  app.post("/api/user/update", controller.update);
  app.post("/api/user/delete", controller.delete);
};