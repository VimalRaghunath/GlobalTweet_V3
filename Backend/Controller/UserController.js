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

    const { name, email, mobile, username, password  } = value;

    const existingUser = await UserSchemaa.findOne({ username });

    if(existingUser){
      return res.status(400).json({
        status: "error",
        message:"This Username is already Exists. Please choose a different one.",
      })
    }

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


  // post: async (req, res) => {
  //   const { title, description, image, category,likes} = req.body;
  //   console.log(image);
  //   console.log(res.token);
  //   const User = await PostSchema.create({
  //     userId: res.token,
  //     title: title,
  //     description: description,
  //     image: image,
  //     category: category,
  //     likes:likes
      
  //   });
  //   res.status(201).json({
  //     status: "success",
  //     message: "Post added successfully",
  //     data: User,
  //   });
  // },


  // create Post/feed of users [POST api/user/newpost]--------------------

  post: async (req, res) => {
    try {
      const { title, description, image, category, likes, comment } = req.body;
      console.log(req.body);

      const userPost = await PostSchema.create({
        
        userId: res.token,
        title: title,
        description: description,
        image: image,
        category: category,
        likes: likes,
        comment: comment
      });
  
      res.status(201).json({
        status: "success",
        message: "Post added successfully",
        data: userPost,
      });
    } catch (error) {
      
      // if (error.name === 'ValidationError') {
      //   const errors = Object.values(error.errors).map((err) => err.message);
      //   return res.status(400).json({
      //     status: 'error',
      //     message: 'Validation failed',
      //     errors: errors,
      //   });
      // }
  
     
      // console.error('Error creating post:', error);
      // res.status(500).json({
      //   status: 'error',
      //   message: 'Internal server error',
      // });
      console.log(error.message);
    }
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

    const post = await PostSchema.find().populate("userId");
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
    // console.log(post);
    if (!post) {
      return res.status(404).json({ error: "No Posts Found" });
    }
    res.status(200).json({
      status: "success",
      message: "post successfully fetched",
      data: post,
    });
    
  },



  // explore/search option [GET api/user/explore]--------------------

  Explore: async (req, res) => {
    try {
      const { query } = req.query;
  
      if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
      }
  
      const regex = new RegExp(query, 'i');
  
      const results = await Tweet.find({ text: regex });
  
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },


  // Editprofile of user [PUT api/user/editprofile]------------------------

  
  Editprofile: async (req,res) => {
    
    const { name, username, Bio} = req.body;
    const editprofile = UserSchemaa.findOne({_id: res.token })
     if(editprofile){
       await UserSchemaa.findByIdAndUpdate(res.token, {
        $set:{ 
             
               username : username, 
               name : name,
               bio : Bio
             }   
       })
        res.status(200).json("Successful")
     }  else {
        res.status(404).json("error")
     }
  },

  EditAvatar: async (req,res) => {
    const { avatar ,id } = req.body;
    console.log(id);
    const editavatar = UserSchemaa.findOne({_id:id })
    // console.log(res.token);
     if(editavatar){
      await UserSchemaa.findByIdAndUpdate(id, {
        $set:{
               Avatar:avatar
             }
      })
        res.status(200).json("Avatar Succesful")
     } else {
        res.status(404).json("error")
     }
  },
   

  // Getallusers in follow section [GET api/user/allusers]

  Getallusers: async (req,res) => {
      const allusers = await UserSchemaa.find();
      
      res.json(allusers)   
  },


  // get user by Id  [GET api/user/getuserbyid]

  getUserById: async(req,res)=>{
       const userId=req.params.id;

  const userById= await UserSchemaa.findById(userId);
     if(!userById){
        return res.status(400).json({
         status:"error",
         message:"cant find user"
    })

   }
    else{
       return res.status(200).json(userById)
   }
  
  } ,


  // Editcoverphoto in profile section [PUT api/user/editcoverphoto]


  Editcoverphoto: async (req,res) => {
    const { coverpic ,id } = req.body;
    const Editcover = UserSchemaa.findOne({_id: id})
    if(Editcover){
      await UserSchemaa.findByIdAndUpdate(id, {
        $set:{
          CoverPic:coverpic
        }
    })
    res.status(200).json("CoverPhoto Succesful")
  } else {
     res.status(404).json("error")

   }
 },


 // showing posts of other users in their profile [GET api/user/allpostsbyid]

  AllpostsById: async (req,res) => {
    userIdd=req.params.id;

    const post= await PostSchema.find({userIdd:userId})

    if(!post){
      return res.status(404).json({
        status:"error",
        message:"user not found"
      })
    }
    else{
      return res.status(200).json(post)
    }

  },


  // like section [POST api/user/like/:id]------------------------


  setLike: async (req, res) => {
    try {
      const { id, username } = req.body;
      const post = await PostSchema.findById(id);
  
      if (!post) {
        return res.status(404).json({ status: "error", message: "Post not found" });
      }
  
      if (!post.likes.includes(username)) {
        post.likes.push(username);
        await post.save();
        res.json({ status: "success", message: "Post liked successfully" });
      } else {
        res.status(400).json({ status: "error", message: "Post already liked" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  },

 

  // follow the user [POST api/user/follow/:id]--------------------

  followUser: async (req, res) => {
    try {
      const  userId  = req.params.id;
      const loggedInUserId = res.token;

      if (userId === loggedInUserId) {
        return res.status(400).json({ error: 'Cannot follow yourself' });
      }

        const userToFollow = await UserSchemaa.findById(userId);
        const loggedInUser = await UserSchemaa.findById(loggedInUserId);

       if (!userToFollow ) {
          return res.status(404).json({ error: 'No such users' });
      }

       if (!loggedInUser) {
        return res.status(404).json({error:"user not found"})
       }




      // Check if already following-----------------

       if (loggedInUser.following.includes(userId)) {
          return res.status(400).json({ error: 'Already following this user' });
      }


      // Update following array for logged-in user------------

      loggedInUser.following.push(userId);
        await loggedInUser.save();


      // Update followers array for the user to follow---------

      userToFollow.followers.push(loggedInUserId);
        await userToFollow.save();

       res.status(200).json({ status: 'success', message: 'User followed successfully' });
      }  catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },


//unfollow the user [POST api/user/unfollow/:id]--------------------


  unfollowUser: async (req, res) => {

    try {
      const { userId } = req.params;
      const loggedInUserId = res.token;

      if (userId === loggedInUserId) {

        return res.status(400).json({ error: 'Cannot unfollow yourself' });
      }

      const userToUnfollow = await UserSchemaa.findById(userId);

      const loggedInUser = await UserSchemaa.findById(loggedInUserId);

      if (!userToUnfollow || !loggedInUser) {

        return res.status(404).json({ error: 'User not found' });
      }


         // Check if already unfollowed

      if (!loggedInUser.following.includes(userId)) {

        return res.status(400).json({ error: 'Not following this user' });
      }



      // Update following array for logged-in user

      loggedInUser.following = loggedInUser.following.filter(id => id !== userId);
      await loggedInUser.save();



      // Update followers array for the user to unfollow

      userToUnfollow.followers = userToUnfollow.followers.filter(id => id !== loggedInUserId);
        await userToUnfollow.save();

        res.status(200).json({ status: 'success', message: 'User unfollowed successfully' });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }

  },








 // messsages showing in profile [GET api/user/messages]---------------



  




};
