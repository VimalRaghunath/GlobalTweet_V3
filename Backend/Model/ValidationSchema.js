const Joi = require("@hapi/joi")

const joiUserValidationSchema = Joi.object({
    
    name: Joi.string(),
    email: Joi.string(),
    mobile: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
    

});


const joiPostValidationSchema = Joi.object({



});


module.exports = { joiUserValidationSchema,joiPostValidationSchema };