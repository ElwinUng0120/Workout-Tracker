const orm = require('../config/orm.mongoose.js');

function router(app){
    app.get('/api/workouts', async function(req, res){
        const response = await orm.getLastWorkout();
        res.send(response);
    });
    app.put('/api/workouts/:id', async function(req, res){
        const response = await orm.addExercise(req.params.id, req.body);
        res.send(response);
    });
    app.post('/api/workouts', async function(req, res){
        const response = await orm.createWorkout(req.body);
        res.send(response);
    });
    app.get('/api/workouts/range', async function(req, res){
        const response = await orm.getWorkoutsInRange();
        res.send(response);
    });
}

module.exports = router;