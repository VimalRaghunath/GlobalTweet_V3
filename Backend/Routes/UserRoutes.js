const express = require("express")
const UserRouter = express.Router();
const UserController = require("../Controller/UserController");
const Trycatch = require("../Middleware/tryCatchMiddleware");
const Auth = require("../Middleware/userAuthentication");



UserRouter.post('/createanaccount',Trycatch(UserController.createuser))
UserRouter.post('/',Trycatch(UserController.signin))
UserRouter.get('/profile',Auth,UserController.profile)
UserRouter.post('/newpost',Auth,UserController.post)
UserRouter.get('/post',Trycatch(UserController.getAllPost))
UserRouter.get('/profileposts',Auth,UserController.profileposts)
UserRouter.get('/explore',Trycatch(UserController.Explore))
UserRouter.put('/editprofile',Trycatch(UserController.Editprofile))
UserRouter.put('/editavatar',Trycatch(UserController.EditAvatar))
UserRouter.get('/allusers',Trycatch(UserController.Getallusers))
UserRouter.put('/editcoverphoto',Trycatch(UserController.Editcoverphoto))
UserRouter.get('/getuserbyid/:id',Auth,(UserController.getUserById))
UserRouter.get('/allpostsbyid/:id',Trycatch(UserController.AllpostsById))




module.exports = UserRouter