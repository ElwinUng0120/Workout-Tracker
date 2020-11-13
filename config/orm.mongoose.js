const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/workout",
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require('../models');

async function getLastWorkout(){
    console.log(`[getLastWorkout] getting data from database...`);
    const response = await db.Workout.findOne({}).sort({_id: -1}).catch((err) => console.log(err));
    console.log(`[getLastWorkout] response received: `, response);
    return response;
}

async function addExercise(id, data){
    console.log(`[addExercise] passing data to insert into database: `, data);
    const response = await db.Workout.update({_id: id}, {$push: {exercises: {data}}}).catch((err) => console.log(err));
    console.log(`[addExercise] repsonse received: `, response);
    return response;
}

async function createWorkout(data = {}){
    console.log(`[createWorkout] passing data in insert into database: `, data);
    const response = await db.Workout.create(data).catch((err) => console.log(err));
    console.log(`[createWorkout] response received: `, response);
    return response;
}

async function getWorkoutsInRange(){
    console.log(`[getWorkoutInRange] getting data from database...`);
    const response = await db.Workout.find({}).catch((err) => console.log(err));
    console.log(`[getWorkoutInRange] response received: `, response);
    return response;
}


module.exports = { getLastWorkout, addExercise, createWorkout, getWorkoutsInRange }


