

var db = require("../models");
var api  = require("./horoscopeAPI")

module.exports = function(app) {

  app.get("/api/:id", function(req, res) {
    db.Signs.findOne({
        where: {
            userName: req.params.id
        }
      }).then(function(dbSign) {
        api.numeroCall("numero_table", dbSign["dayOfBirth"], dbSign["monthOfBirth"], dbSign["yearOfBirth"], dbSign["userName"], function(error, result){
            if(error)
            {
                console.log("Error returned!!");
                console.log(error)
            }
            else
            {
                res.json(result)
            }
        });
      });
    });

  app.post("/api/post", function(req, res) {
    db.Signs.create({
      userName: req.body.userName,
      dayOfBirth: req.body.dayOfBirth,
      monthOfBirth: req.body.monthOfBirth,
      yearOfBirth: req.body.yearOfBirth,
      email: req.body.email
    }).then(function(db){
      res.json(db)
    })
  });
};

