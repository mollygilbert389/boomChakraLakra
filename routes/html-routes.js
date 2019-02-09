var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
});

app.get("/api/:id", function(req, res) {
    console.log(res)
});
};