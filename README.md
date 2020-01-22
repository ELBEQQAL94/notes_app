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

* [ ] If logged in show:

    * [x] Show Username on Dashboard

    * [x] after sign up, immediatly login

    * [x] show log out button in header

    * [ ] Show user icon and username in header

* [x] Have one protected route in the backend
    * [x] Only looged in user can request this route

## Authorization:
* [x] visitors can only see the homepage
    * [x] checkTokenSetUser middleware
        * [x] get TOKEN for Authorization header
            * [x] if defined -----
                * [x] Verify the Token with token secret
                * [x] Set req.user to be the decoded verified payload
            * [x] else - move along
    * [x] IsLoogedIn Middleware
        * [x] if req.user is set - move along
        * [x] else - send unauthorized error message
    * [x] redirect to login form
* [x] Looged in users can only see their page
* [x] Create notes form on client
    * [x]  Title
    * [x] Description
* [x] POST /api/v1/notes
    * [x] Must be logged in
    * [x] Logged in users can create notes
        * [x] Title
        * [x] Description -- markdown
        * [x] Set user._id on server with Logged in users id
* [x] Get /api/v1/notes
    * [x] Must be logged in
    * [x] Logged in users can request all notes
        * [x] Get all notes in DB with logged in users user_id
* [x] List all notes with client
    * [ ] render description with markdown

## Stretch

* [ ] Use redis for cach request from the client

* [ ] Password reset with email

* [ ] Forgot password email
    * [ ] Reset with email
    * [ ] Reset by answering security questions

* [ ] Sort notes by date created

* [ ] Add redux

* [ ] Create editor for description note.

* [ ] Recreate the header.

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
    * [ ] Add reCaptcha for signup/logins

* [ ] verification user email if real: 
    [`https://stackoverflow.com/questions/39092822/how-to-do-confirm-email-address-with-express-node`]

* [x] hidden SignUp and Login link whene user is SignUp/LogIn. just show him ability to logout.

* [ ] In the home page when you SignUp/LogIn, button in the homepage should go to dashboard page.



### To Do For Deploy Server On Heroku
* [ ] heroku

### To Do For Deploy Client On Netlify

### To Deploy everything on the same heroku instance
* [ ] Move the server package.json to the root of the folder
* [ ] Update start script for server to be a relative path
* [ ] post-deploy script that will build reactjs app
* [ ] Add a static serve to the server that serves '../client/build'
* [ ] Environment variables for DB connection and token secret


### TESTS [`server`, `client`] Mocha && Jest

* Test each component with jest.

* Test server using Mocha