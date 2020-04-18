var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.workouts.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.workouts.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });
};