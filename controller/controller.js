var express = require("express");

var router = express.Router();

var model = require("../models/model.js");

router.get("/", function(req, res) {
  model.selectAll(function(data) {
    var hbsObject = {
      signs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sign", function(req, res) {
  model.insertOne("astro_sign", req.body.name, function(result) {

    res.json({ id: result.insertId });
  });
});

// router.put("/api/sign/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

// //   model.updateOne({
// //     devoured: req.body.devoured
// //   }, condition, function(result) {
// //     if (result.affectedRows == 0) {
// //       // If no rows were changed, then the ID must not exist, so 404
// //       return res.status(404).end();
// //     } else {
// //       res.status(200).end();
// //     }
// //   });
// // });

// router.put("/api/reset", function(req, res) {
//   burger.resetAll(function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.deleteOne(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;