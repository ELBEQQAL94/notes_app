import Joi from "joi";

// SIGNUP SCHEMA
const signup_schema = Joi.object({
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


// LOGIN  SCHEMA
const login_schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .trim()
    .min(6)
    .required()
});


// NOTE  SCHEMA
const note_schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(200)
      .required(),
    description: Joi.string()
      .trim()
      .required()
});

export const checkComparePassword = user => {

    const result = Joi.validate(user, signup_schema);
    let isError = false;
  
    if (result.error !== null) {
        isError = true;
        return result.error.details[0].message;  
    } 

    if (user.password !== user.confirmPassword) {
        isError = true;
        return 'Passwords must be match!';
    }

    return isError;

};


// make sure user is login
export const isLogin = () => {
  if (localStorage.getItem('token')) {
      return true;
  }

  return false;
};

// make user to log out
export const logout = () => {
  localStorage.removeItem('token');
};

export const loginValidate = user => {

    const result = Joi.validate(user, login_schema);
    let isError = false;
  
    if (result.error !== null) {
        isError = true;
        return result.error.details[0].message;  
    } 

    return isError;

};


export const noteValidate = note => {

    const result = Joi.validate(note, note_schema);
    let isError = false;
  
    if (result.error !== null) {
        isError = true;
        return result.error.details[0].message;  
    } 

    return isError;

};
