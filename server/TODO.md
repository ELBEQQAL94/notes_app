### TODO:

## Backe End

* [x] Test the server using POSTMAN

    * heroku live server:  [](https://auth-from-scratch.herokuapp.com/)

    * [x] LOG IN USER POST requset to: https://auth-from-scratch.herokuapp.com/auth/signup

    * [x] SIGN UP USER POST requset to: https://auth-from-scratch.herokuapp.com/auth/login

    * [x] GET USER INFO https://auth-from-scratch.herokuapp.com/

    * [x] Create NOTES POST request to: https:auth-from-scratch.herokuapp.com/api/v1/notes

    * [x] Get NOTES GET request to: https:auth-from-scratch.herokuapp.com/api/v1/notes

* [x] Refactor notes routes

* [x] Add NODE_ENV

* [x] Add CORS to env file

* [x] Set repted schema in var

* [x] Allow unused vars in eslint

* [x] Refactor users routes

* [x] Check if email is unique
    * [x] check invalid email
    * [x] check empty field for email form
    * [x] replace username with email
    * [x] validate email
    * [x] display error
* [x] Add username
    * [x] Add username to the schema
    * [x] Add username to admin object
    * [x] Add username to schema validate
    * [x] Check invalid username
    * [x] Allow username with underscore
    * [x] check empty field for username form
    * [x] validate username
    * [x] display error if username invalid
    * [x] test for username

* [x] Check email in db

* [x] prevent get admin account whene request to GET api/v1/users

* [x] Refactoring controllers to middlewares functions

* [x] Store TOKEN in cookie
    * [](https://www.youtube.com/watch?v=USNwvB5o63U)

* [ ] OAuth
    * Login/Signup with google/facebook/twitter/insagrame

* [x] Tests new routes and check code style format

* [x] Test notes.test

* [x] admin routes

* [ ] Add notes to each user

* [ ] change status code for unauth from 500 to 401

## Front End

* [ ] Add email form
    * [ ] Add validate email
    * [ ] Display error if invalid email

* [ ] validate email in schema and display error
    * If there is invalid email

* [ ] Test the server with the front end

    * heroku live server:  [](https://auth-from-scratch.herokuapp.com/)

    * [x] Test signup request POST https://auth-from-scratch.herokuapp.com/auth/signup

    * [x] Test log in request POST https://auth-from-scratch.herokuapp.com/auth/login

* [ ] If logged in show:

    * [ ] Show Username on Dashboard

    * [ ] Show user icon and username in header
* [ ] Create logo for the app

* [ ] Create editor for description note.

* [ ] Redesign the header.
