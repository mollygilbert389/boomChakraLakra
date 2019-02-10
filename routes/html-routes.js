var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    console.log("html-routes connected")
    res.render("index");
});

app.get("/api/:id", function(req, res) {
    console.log("html-routes id connected")
    console.log(res)
    res.render("/api/:")
});
};