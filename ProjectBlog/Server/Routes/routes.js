const express = require("express");
const route = express.Router();
const Controllers = require("../controllers/Controllers");
const Middleware = require("../MiddleWares/middleware");

// Testing Api
route.get("/check", Controllers.check);

//SignUp Api
route.post("/signup", Controllers.signup);

//Login
route.post("/login", Controllers.login);

// Add Tasks
route.post("/usertasks", Middleware.AUTH_MIDDLEWARE, Controllers.addtasks);

//Get All Tasks
route.get("/usertasks", Middleware.AUTH_MIDDLEWARE, Controllers.getTasks);

//update tasks
route.put("/usertasks", Middleware.AUTH_MIDDLEWARE, Controllers.updateTasks);

//delete tasks
route.delete(
  "/usertasks/:id",
  Middleware.AUTH_MIDDLEWARE,
  Controllers.deleteTasks
);

module.exports = route;
