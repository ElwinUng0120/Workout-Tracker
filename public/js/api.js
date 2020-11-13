const API = {
  async getLastWorkout() {
    const res = await fetch("/api/workouts", {
                        type: 'GET'
                      }).catch(function(err) {
                        console.log(err)
                      });

    return res.json();
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    return res.json();
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    return res.json();
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    return res.json();
  }
};
