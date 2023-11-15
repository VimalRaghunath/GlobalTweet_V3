const bcrypt = require("bcrypt");

const { joiUserValidationSchema } = require("../Model/ValidationSchema");
const jwt = require("jsonwebtoken");
const UserSchemaa = require("../Model/UserSchemaa");
const PostSchema = require("../Model/PostSchema");
const { joiPostValidationSchema  } = require("../Model/ValidationSchema")


module.exports  = {

    //create a user with name,email,mobile,username,password (POST api/user/createanaccount)--------------
        
    createuser: async (req,res) => {
        const { value,error } = joiUserValidationSchema.validate(req.body);

       if(error) {
         return res.json(error.message)
       } 
          
       const { name, email, mobile, username, password} = value;

       await UserSchemaa.create({
        name,
        email,
        mobile,
        username,
        password,
       })
        res.status(200).json({
            status:"success",
            message:"user registration done",
        })
    },


   // user signin using username,password [POST api/user/ ]-----------------

      
   signin : async (req,res) => {
      
        const { value, error } =  joiUserValidationSchema.validate(req.body);

       if(error){
         return res.json(error.message)
       }

       const { username, password } = value 
       
       const User= await UserSchemaa.findOne({
           username: username,
           password : password
       })
       
        
       if(!User){
         return res.status(404).json({error: "user not found"});
       }
         const token = jwt.sign({
            id: User._id
         }, process.env.USER_ACCESS_TOKEN_SECRET)

         res.status(200).json({status: "success", message: "Signin successful", data: token })

   },


    
   //  Post/feed of users [POST api/user/post]--------------------


    post : async (req,res) => {
          
         const { value, error } = joiPostValidationSchema.validate(req.body)

         if(error){
          return res.json(error.message)
         }

         const {  id, title, description, image, category, likes } = value

         const User = await PostSchema.create({
          id: id,
          title: title,
          description: description,
          image: image,
          category: category,
          likes: likes,

         })

      },











   
   // user Profile using username,password [GET api/user/profile ]-----------------
   


   profile : async (req,res) => {
      const userprofile = await UserSchemaa.find({ _id:res.token })
      if(userprofile.length !== 0){

        res.json(userprofile)
      } else {
        res.json("user not found")
      }
      
   },


   // each users Profile using username,password [GET api/user/]

    


}



