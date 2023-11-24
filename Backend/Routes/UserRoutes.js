const express = require("express")
const UserRouter = express.Router();
const UserController = require("../Controller/UserController");
const Trycatch = require("../Middleware/tryCatchMiddleware");
const Auth = require("../Middleware/userAuthentication");

UserRouter.post('/createanaccount',(UserController.createuser))
UserRouter.post('/',(UserController.signin))
UserRouter.get('/profile',Auth,UserController.profile)
UserRouter.post('/newpost',UserController.post)
UserRouter.get('/post',UserController.getAllPost)
UserRouter.get('/profile/:id',Auth,UserController.profileposts)





module.exports = UserRouter