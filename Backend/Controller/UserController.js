const bcrypt = require("bcrypt");
const User =  require('../Model/userSchema');
const { joiUserValidationSchema } = require("../Model/ValidationSchema");
const jwt = require("jsonwebtoken")


module.exports  = {

    //create a user with name,email,mobile,username,password (POST api/user/createanaccount)--------------
        
    createuser: async (req,res) => {
        const { value,error } = joiUserValidationSchema.validate(req.body);

       if(error) {
         return res.json(error.message)
       } 
          
       const { name, email, mobile, username, password} = value;

       await User.create({
        Name: name,
        Email: email,
        Mobile : mobile,
        Username : username,
        Password : password,
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

       await User.find({
           username: username,
           password : password
       })
        
       if(!User){
         return res.status(404).json({error: "user not found"});
       }
         const token = jwt.sign({
            username: username
         }, process.env.USER_ACCESS_TOKEN_SECRET)

         res.status(200).json({status: "success", message: "Signin successful", data: token })

   }


}



