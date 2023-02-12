
var express = require("express");
const cors = require('cors');

let SERVER_PORT = 6655;

// Initialize Express
var app = express();

// CORS is enabled for all origins
app.use(cors());


app.use(express.static("archon"));


// Start the server
app.listen(SERVER_PORT, function () {
    console.log("Listening on port " + SERVER_PORT + ".");
});
