const express = require("express")
const UserRouter = express.Router();
const UserController = require("../Controller/UserController");
const Trycatch = require("../Middleware/tryCatchMiddleware");
const Auth = require("../Middleware/userAuthentication");

UserRouter.post('/createanaccount',(UserController.createuser))
UserRouter.post('/',(UserController.signin))
UserRouter.get('/profile',Auth,UserController.profile)






module.exports = UserRouter