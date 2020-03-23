// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

//Routes

module.exports = function(app) {

  //Each of the below routes handles the HTML page that the user gets sent to.
  
  //Index route loads view.html

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/joblisting", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/joblisting.html"))
  });

  app.get("/companypage", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/companyPage.html"))
  });

  }
// Passport Information Kept Below in Comments

// // Requiring our custom middleware for checking if a user is logged in
// let isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {

//   app.get("/", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });


