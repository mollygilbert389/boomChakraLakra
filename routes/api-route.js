

var db = require("../models");
var api  = require("./horoscopeAPI")

module.exports = function(app) {

  app.get("/api/:id", function(req, res) {
    // Find certain user to pull their API info for
    db.Signs.findOne({
        where: {
            userName: req.params.id
        }
      }).then(function(dbSign) {
        var horoscope = api.numeroCall("numero_table", dbSign["dayOfBirth"], dbSign["monthOfBirth"], dbSign["yearOfBirth"], dbSign["userName"], function(error, result){
            if(error)
            {
                console.log("Error returned!!");
                console.log(error)
            }
            else
            {
                console.log(result);
                res.json(result)
            }
        });
        // // res.json(dbSign);
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

