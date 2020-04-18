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
            type: String,
            trim: true,
            required: "Type of workout"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of workout"
        },
        duration: {
            type: String,
            trim: true,
            required: "How Long workout"
        },
        weight: {
            type: Number,
            trim: true,
            required: "how many pounds"
        },
        reps: {
            type: Number,
            trim: true,
            required: "how many reps?"
        },
        sets: {
            type: Number,
            trim: true,
            required: "How Many sets?"
        },
    }
  ]
});

const workouts = mongoose.model("Workout", workoutSchema);

module.exports = workouts;
