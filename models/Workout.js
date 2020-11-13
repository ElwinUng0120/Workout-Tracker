const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Workout = new Schema ({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
});

module.exports = mongoose.model('Workout', Workout);