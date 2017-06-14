//app.js
'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


var Task = require('./api/models/model');

// const session = require('express-session')
// const compress = require('compression')
// const sass = require('node-sass-middleware')

// Lambda does not allow you to configure environment variables, but dotenv is an
// excellent and simple solution, with the added benefit of allowing you to easily
// manage different environment variables per stage, developer, environment, etc.


// require('dotenv').config()

const app = express()

var routes = require('./api/routes/routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



/*
* aws-serverless-express communicates over a Unix domain socket. While it's not required
* to remove this line, I recommend doing so as it just sits idle.
app.listen(3000)
*/

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
