const config = require("config");
const jwt = require("jsonwebtoken");

// secret code
const secret = config.get("jwtSecrete");

function IsLoogedIn(req, res, next){
    if(req.user){
        next();
    } else {
        const error = new Error('unauthorized.');
        res.status(401);
        next(error);
    }
};

function checkTokenSetUser(req, res, next) {

  const authHeader = req.get("authorization");

  if (authHeader) {

    const token = authHeader.split(" ")[1];

    if (token) {

      jwt.verify(token, secret, (error, user) => {
        if (error) {
          next(error);
        }

        req.user = user;

        next();
      });

    } else {
      next();
    };
  } else {
    next();
  };
  
};

function isAdmin(req, res, next) {
  if(req.user.role === "admin"){
    next();
} else {
    const error = new Error('unauthorized.');
    res.status(401);
    next(error);
}
};

module.exports = { checkTokenSetUser, IsLoogedIn, isAdmin };
