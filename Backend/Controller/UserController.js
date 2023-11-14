const bcrypt = require("bcrypt");

const { joiUserValidationSchema } = require("../Model/ValidationSchema");
const jwt = require("jsonwebtoken");
const UserSchemaa = require("../Model/UserSchemaa");


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
       console.log(username);
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


    

   profile : async (req,res) => {
      const userprofile = await UserSchemaa.find({ _id:res.token })
      if(userprofile.length !== 0){

        res.json(userprofile)
      } else {
        res.json("user not found")
      }
      
   },




}



