import Joi from "joi";

// schema
const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .trim()
    .min(6)
    .required(),
  confirmPassword: Joi.string()
    .trim()
    .min(6)
    .required()
});

export const checkComparePassword = user => {

    const result = Joi.validate(user, schema);
    let isError = false;
  
    if (result.error !== null) {
        isError = true;
        return result.error.details[0].message;  
    } 

    if (user.password !== user.confirmPassword) {
        isError = true;
        return 'Password must be match!';
    }

    return isError;

};
