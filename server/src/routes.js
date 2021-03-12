const { Router } = require("express");
const UserController = require("./controller/UserController");

const routes = new Router();

require("./database");

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to PSO Engenharia, Mini API Testing." });
});

routes.get("/users", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
