const bcrypt = require("bcrypt");

const { joiUserValidationSchema } = require("../Model/ValidationSchema");
const jwt = require("jsonwebtoken");
const UserSchemaa = require("../Model/UserSchemaa");
const PostSchema = require("../Model/PostSchema");
const { joiPostValidationSchema } = require("../Model/ValidationSchema");
const messageSchema = require('../Model/messageSchema')

module.exports = {

  //create a user with name,email,mobile,username,password (POST api/user/createanaccount)--------------


  createuser: async (req, res) => {
    const { value, error } = joiUserValidationSchema.validate(req.body);

    if (error) {
      return res.json(error.message);
    }

    const { name, email, mobile, username, password } = value;

    await UserSchemaa.create({
      name,
      email,
      mobile,
      username,
      password,
    });
    res.status(200).json({
      status: "success",
      message: "user registration done",
    });
  },


  // user signin using username,password [POST api/user/ ]-----------------


  signin: async (req, res) => {
    const { value, error } = joiUserValidationSchema.validate(req.body);

    if (error) {
      return res.json(error.message);
    }

    const { username, password } = value;

    const User = await UserSchemaa.findOne({
      username: username,
      password: password,
    });

    if (!User) {
      res.status(404).json({ error: "user not found" });
    } else {
      const token = jwt.sign(
        {
          id: User._id,
        },
        process.env.USER_ACCESS_TOKEN_SECRET
      );

      res
        .status(200)
        .json({ status: "success", message: "Signin successful", data: token });
    }
  },


  // create Post/feed of users [POST api/user/newpost]--------------------


  post: async (req, res) => {
    const { title, description, image, category, likes } = req.body;
    console.log(image);
    console.log(res.token);
    const User = await PostSchema.create({
      userId: res.token,
      title: title,
      description: description,
      image: image,
      category: category,
      likes: likes,
    });
    res.status(201).json({
      status: "success",
      message: "Post added successfully",
      data: User,
    });
  },


  // user Profile using username,password [GET api/user/profile ]-----------------


  profile: async (req, res) => {
    const userprofile = await UserSchemaa.findOne({ _id: res.token });
    const user = await PostSchema.find({});
    if (userprofile) {
      res.status(200).json({ userpro: userprofile, usersspro: user });
    } else {
      res.status(403).json("user not found");
    }
  },


  // showing all posts in the home to the user [GET api/user/post]---------------------------


  getAllPost: async (req, res) => {

    const post = await PostSchema.find();
    if (!post) {
      return res.status(404).json({ error: "No Posts Found" });
    }
    res.status(200).json({
      status: "success",
      message: "post successfully fetched",
      data: post,
    });
  },


  
  // showing posts in specific profile [GET api/user/profile/:id]----------------------------


  profileposts: async (req, res) => {
    
    const userprofile = await UserSchemaa.findOne({ _id: res.token });

    if (!userprofile) {
      res.status(404).json({status:"error",message:"user not found"})
    }

    const post = await PostSchema.find({userId: res.token});
    console.log(post);
    if (!post) {
      return res.status(404).json({ error: "No Posts Found" });
    }
    res.status(200).json({
      status: "success",
      message: "post successfully fetched",
      data: post,
    });
    
  },

 
 // messsages showing in profile [GET api/user/messages]---------------



  




};
