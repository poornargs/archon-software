
var express = require("express");
const cors = require('cors');

require('dotenv').config()

// console.log(process.env)

let { PORT } = process.env;


PORT = PORT || 6655;

// Initialize Express
var app = express();

// CORS is enabled for all origins
app.use(cors());


app.use(express.static("archon"));


app.listen(PORT, process.env.HOST || "0.0.0.0", () => {
    console.log(`Example app listening on port ${PORT}, host on ${JSON.stringify(app.listen().address())}`)
})
