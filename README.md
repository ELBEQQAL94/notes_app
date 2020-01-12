### authentication based on JWT-based to a Node/Express/Mongo app.

## Authentication:
* [ ] form-based
    * [x] Create server
    * [ ] add auth router
    * [ ] Create user with POST /auth/signup
        * [ ] valid required fields
        * [ ] Check if email is unique
        * [ ] hash password with bcrypt
        * [ ] inserto into db
        * [ ] 
    * [ ] Login user with POST /auth/login
        * [ ] check if email in db
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

### Deploy app ['heroku', 'netlify']