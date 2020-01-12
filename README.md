### authentication based on JWT-based to a Node/Express/Mongo app.

## Authentication
* [] Create server
* [] add auth router
* [] Create user with POST /auth/signup
    * [] valid required fields
    * [] Check if email is unique
    * [] hash password with bcrypt
    * [] inserto into db
    * [] 
* [] Login user with POST /auth/login
    * [] check if email in db
    * [] compare password with hash hashed password in db
    * [] Create and sign a JWT
        * [] respond with JWT
* [] Create login form; show errors; redirect;
    * [] validate required fields
* [] Create signup form; show errors; redirect;
    * [] validate required fields

## Authorization:
* [] visitors can only see the homepage
    * [] 