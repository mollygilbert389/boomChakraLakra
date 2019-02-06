var orm = require("../config/orm.js");

var model = {
    selectAll: function(cb) {
    orm.selectAll("signs", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("signs", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("signs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("signs", condition, function(res) {
      cb(res);
    });
  },
  resetAll: function(cb) {
    orm.resetAll(function(res) {
      cb(res);
    });
  }
};

module.exports = model;