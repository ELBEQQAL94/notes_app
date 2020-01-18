### DESCRIPTION
Authentication based on JWT-based to a Node/Express/Mongo app.

### Back End
* http://localhost:8080

### Front End
* http://localhost:3000

## Authentication:
* [x] form-based
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
    * [x] Create landing page
        * [x] Link to sign up page
    * [x] Create Sign Up Page
        * [x] Form with: username and password
        * [x] when form is submitted
            * [x] validate username
                * [x] display errors
            * [x] validate password
                * [x] display errors
            * [x] validate confirm password
                * [x] display errors
            * [x] POST request to the server auth/login
                * [x] Display errors
                * [x] If succesful sign up
                    * [x] Redirect to login page
    * [x] Login user with POST /auth/login
        * [x] validate user info
        * [ ] check if email in db
        * [x] check if username in db
        * [x] compare password with hashed password in db
            * [ ] rate limiting
        * [x] Create and sign a JWT
            * [x] respond with JWT
    * [x] Create Log In Page
        * [x] Form with: username and password
        * [x] when form is submitted
            * [x] validate username
                * [x] display errors
            *  [x] validate password
                * [x] display errors
            * [x] POST request to the server auth/login
                * [x] Display errors
                * [x] If succesful Log In
                    * [x] Store the TOKEN in localStorage
                    * [x] Redirect To "Dashboard"

* [x] If a looged in user visits the signup, or login page, redirect them to "Dashboard"

* [x] If non looged in user visits the dashboard, redirect to the login page

* [ ] Show Username on Dashboard

* [ ] after sign up, immediatly login

* [ ] Have one protected route in the backend
    * [ ] Only looged in user can request this route

## Authorization:
* [ ] visitors can only see the homepage
    * [ ] IsLoogedIn Middleware
        * [ ] Validate JWT in header
            * [ ] set req.user to JWT payload
        * [ ] send unauthorized error message
    * [ ] redirect to login form
* [ ] Looged in users can only see their page
    * [ ] Allowaccess middleware
        * [ ] id in url must match id in req.user
        * [ ] send an authorized error message
    * [ ] redirect to user page if they visit the homepage
        * [ ] set user._id in localStorage after login/signup
    * [ ] Add GET /auth/logout to clear user._id cookie
        * [ ] redirect to login page

## Stretch

* [ ] Use redis for cach request from the client

* [ ] OAuth
    * Login/Signup with google/facebook/twitter/insagrame

## Admin page:
* [ ] Admin page that lists all users
    * [ ] admin table with user_id
    * [ ] de-activate users

* [ ] Admin can see any page on site

* [ ] Rate limiting
    * [ ] Prevent brute force logins
    * [ ] Lock out account after too many login attempts

* [ ] verification user email if real: 
    [`https://stackoverflow.com/questions/39092822/how-to-do-confirm-email-address-with-express-node`]

### Deploy app
* [ ] heroku

### TESTS [`server`, `client`]