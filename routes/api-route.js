

var db = require("../models");
var api  = require("./horoscopeAPI")

module.exports = function(app) {

  app.get("/api/:id", function(req, res) {
    // Find certain user to pull their API info for
    console.log(db.signs)
    db.signs.findOne({
        include: [db.User]
      }).then(function(dbSign) {
        
        console.log("made it here")
        // var horoscope = api.numeroCall(dbSign.dayOfBirth, dbSign.monthOfBrith, dbSign.yearOfBrith, dbSign.userName)
        console.log(horoscope)
        // res.json(dbSign);
      });
  });

  app.post("/api/users", function(req, res) {
    // adds new user to DB
    console.log(req.body);
    db.signs.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};

