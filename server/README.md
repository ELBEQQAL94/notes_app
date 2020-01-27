### Description
-----
Authentication based on JWT-based to a Node/Express/Mongo app.

### Back End
-----
* http://localhost:8080

### Front End
-----
* http://localhost:3000

### Authentication:
-----
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

### Authorization:
------
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

### Stretch
------
* [ ] Testing by mocking redux store

* [ ] Refactoring controllers to middlewares functions

* [x] In the home page when you SignUp/LogIn, button in the homepage should go to dashboard page.

* [ ] Create logo for the app

* [ ] Store TOKEN in cookie

* [x] Add controller folder and move all routes code on it

* [ ] Use redis for cach request from the client

* [ ] Password reset with email

* [ ] Forgot password email
    * [ ] Reset with email
    * [ ] Reset by answering security questions

* [x] Sort notes by date created

* [ ] Add redux

* [ ] Create editor for description note.

* [ ] Redesign the header.

* [ ] OAuth
    * Login/Signup with google/facebook/twitter/insagrame

* [ ] Add avatar to user profile

* [ ] Add user profile page conatin all information about  the user
    * [ ] avatar
    * [ ] username
    * [ ] email
    * [ ] reset_password
    * [ ] social media links
    * [ ] role...
* [ ] Add status 200 to all successful response
* [ ] Refactore the error message

### Admin page:
------

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

### BACKEND ADMINISTRATION
------

* [x] Route to list all users
    * [x] GET /api/v1/users

* [x] Route to update the user
    * [x] PUT /api/v1/users/:id

* [ ] Route to delete all users
    * [ ] DELETE /api/v1/users/:id

* [ ] Route to create the user
    * [ ] POST /api/v1/users/add-user


* [x] Add a role property to users when created
    * [x] Role will default to 'user'

* [x] Add an active property to users when created
    * [x] active will default to 'true'

* [x] Seed the DB with an admin user if not exist yet
    * [x] Insert user with role 'admin'
    
* [x] Restrict GET /api/v1/users to only users with admin
 role
    * all users

* [x] Restrict PUT /api/v1/users/:id to only users with admin role
    * Update a user.


* [ ] Restrict POST /api/v1/users to only users with admin role
    * Create a user

* [ ] Restrict DELETE /api/v1/users to only users with admin role
    *  Delete a user

* [x] Prevent inactive users from logging in

* [ ] Prevent admin set his active account to false

### To Do For Deploy Server on now
------

* [x] add a secrets using: now secrets add YOUR_SECRET to each env variables
* [x] In root directory create new file now.json
* [x] run npx now-config
* [x] add environement section to now.json file
* [x] gitignore node

### To Do For Deploy Client On Netlify
-----

### To Deploy everything on the same heroku instance
-----
* [ ] Move the server package.json to the root of the folder
* [ ] Update start script for server to be a relative path
* [ ] post-deploy script that will build reactjs app
* [ ] Add a static serve to the server that serves '../client/build'
* [ ] Environment variables for DB connection and token secret

### TESTS [`server`, `client`] Mocha && Jest
------

## Front End App

* [ ] Test each component with jest.

## Back End App

* [x] setup tests:
    * [x] mocha
    * [x] chai
    * [x] supertest 
    * [x] Create a test db
* [x] setup linter file
    * [x] install eslint on devDependencies
    * [x] run npx eslint --init
        * [x] check syntax, find problems, and enforce style code
        * [x] choose commonjs
        * [x] none of these
        * [x] No TypeScript
        * [x] node
        * [x] use popular style guide
        * [x] Airbnb
        * [x] JavaScript
        * [x] install eslint extension
        * [x] reloade VScode
        * [x] add lint script to JSON file
        * [x] run lint script
        * [x] run lint --fix to fix the errors
        * [x] add rules
        * [x] add environement
        * [x] add app.test.js file for test the server
        * [x] add test script using mocha src/ --watch
        * [ ] test all routes of the app
* [x] Create a MVC folder structure
    * [x] folder by features
        * [x] controller file
        * [x] model file for validation and query logic
        * [x] routes file for basic descriptions fro express routes
        * [x] test file inside for each folder
* [x] refactor some routes into middlewares 

### Screen shot for the App
-----

### Code Review 
-----

* [ ] Everything is code, i hope that app can live a lot of time LOL.

### Birth Day
-----

* 27/01/2020

### All Technologies I Used
-----