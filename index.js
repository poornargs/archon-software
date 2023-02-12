
var express = require("express");
const cors = require('cors');

require('dotenv').config()

// console.log(process.env)

let { SERVER_PORT } = process.env;


SERVER_PORT = SERVER_PORT || 6655;

// Initialize Express
var app = express();

// CORS is enabled for all origins
app.use(cors());


app.use(express.static("archon"));


app.listen(port, process.env.HOST || "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}, host on ${JSON.stringify(app.listen().address())}`)
})
