// importing express.js
const express = require("express");
const router = require('./routes/api_routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

// starting server
app.listen(PORT, function(){
    console.log("Serving workout menus on PORT " + PORT);
});