// light weight web framework
const express = require("express");
// interact with mongodb with nodejs
const mongoose = require("mongoose");
// parse incoming requests 
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users"); 

const app = express();

/*
Bodyparser middleware
What's middleware? https://redux.js.org/advanced/middleware#:~:text=It%20provides%20a%20third%2Dparty,API%2C%20routing%2C%20and%20more.
- Provides a third party extension point between dispatching an action, and the moment it reaches the reducer
What is Redux?
- A predictable state container for JS apps
- Tutorial: https://redux.js.org/tutorials/essentials/part-1-overview-concepts
*/
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config 
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.
    connect(
        db, 
        { useNewUrlParser: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
// Authentication for Node.js: http://www.passportjs.org/
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users/", users);

// process.env.port is Heroku's port if you choose to deploy the app there
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server up and running on port ${port} !"));
