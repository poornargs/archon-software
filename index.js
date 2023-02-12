
var express = require("express");
const cors = require('cors');

// require('dotenv').config()

// console.log(process.env)

// let { SERVER_PORT } = process.env;


// SERVER_PORT = SERVER_PORT || 6655;

let SERVER_PORT = 6655;

// Initialize Express
var app = express();

// CORS is enabled for all origins
app.use(cors());


app.use(express.static("archon"));


// // Start the server
// app.listen(SERVER_PORT, function () {
//     console.log("Listening on port " + SERVER_PORT + ".");
// });

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}, host on ${JSON.stringify(app.listen().address())}`)
})
