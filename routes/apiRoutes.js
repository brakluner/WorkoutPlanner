var db = require("../models");
const router = require("express").Router();
const mongojs = require("mongojs");

  router.get("/api/workouts", (req, res) => {
    db.workouts.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
  });

  // const sendResult = (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(data)
  //   }
  // }
  router.get("/api/workouts?:id", (req, res) => {
    console.log(req.params.id)
    db.workouts.find({ _id: mongojs.ObjectID(req.params.id)}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
  });

  router.get("/api/populated?:id", (req, res) => {
    console.log(req.params.id)
    db.workouts.find({ _id: mongojs.ObjectID(req.params.id)})
    .populate("exercises")
    .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err)
      })
    
    })

  router.get("/api/workouts/range", (req, res) => {
    // console.log(req)
    db.workouts.find({})
    .populate("exercises")
    .then(DbExercises => {
      console.log(DbExercises)
      res.json(DbExercises);
    })
    .catch(err => {
      res.json(err)
    })
    })

  router.post("/api/workouts", ({ body }, res) => {
    db.workouts.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

  router.put("/api/workouts?:id", (req, res) => {
    db.exercises.create(req.body)
    .then(({_id}) => db.workouts.findOneAndUpdate({ _id: mongojs.ObjectID(req.params.id)}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;