let mongoose = require("mongoose");
let db = require("../models");

console.log(db)

mongoose.connect("mongodb://fitnesstracker:6Apples@ds057244.mlab.com:57244/heroku_slsrv8x9", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  }
]
db.workouts.deleteMany({})
  .then(() => db.workouts.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
