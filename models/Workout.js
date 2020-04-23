const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
        type: {
            type: Schema.Types.ObjectId,
            ref: "exercises"
        },
    }
  ]
});

const workouts = mongoose.model("Workout", workoutSchema);

module.exports = workouts;
