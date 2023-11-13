const express = require("express")
const UserRouter = express.Router();
const UserController = require("../Controller/UserController");
const Trycatch = require("../Middleware/tryCatchMiddleware")

UserRouter.post('/createanaccount',(UserController.createuser))
UserRouter.post('/',(UserController.signin))






module.exports = UserRouter