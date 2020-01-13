### authentication based on JWT-based to a Node/Express/Mongo app.

## Authentication:
* [ ] form-based
    * [x] Create server
    * [x] add auth router
    * [x] create data base with mongoDB atlas
    * [x] add config folder
    * [x] connect to mongose
    * [x] add mongose schema
    * [x] Create user with POST /auth/signup
        * [x] valid required fields
        * [x] Check if username is unique
        * [ ] Check if email is unique
        * [x] hash password with bcrypt
        * [x] inserto into db 
    * [ ] Login user with POST /auth/login
        * [ ] check if email in db
        * [ ] check if username in db
        * [ ] compare password with hash hashed password in db
        * [ ] Create and sign a JWT
            * [ ] respond with JWT
    * [ ] Create login form; show errors; redirect;
        * [ ] validate required fields
    * [ ] Create signup form; show errors; redirect;
        * [ ] validate required fields
* [ ] OAuth
    * Login with google/facebook/twitter/insagrame

## Authorization:
* [ ] visitors can only see the homepage
    * [ ] 

## Stretch

## Admin page:
* [ ] Admin page that lists all users
    * [ ] admin table with user_id
    * [ ] de-activate users
* [ ] Admin can see any page on site
* [ ] Rate limiting
    * [ ] Prevent brute force logins
* [ ] verification user email if real: 
    [`https://stackoverflow.com/questions/39092822/how-to-do-confirm-email-address-with-express-node`]

### Deploy app
* [ ] heroku