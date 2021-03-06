// Requiring necessary npm packages
const express = require("express");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing

const db = require("./models");

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({
  extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});


//Passport information kept below in comments

// const session = require("express-session");
// // Requiring passport as we've configured it
// const passport = require("./config/passport");

// // Setting up port and requiring models for syncing
// const PORT = process.env.PORT || 8080;
// const db = require("./models");

// // Creating express app and configuring middleware needed for authentication
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// // Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function() {
//   app.listen(PORT, () => {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });
