var express = require('express'),
  app = express(),
  Task = require('./api/models/model'),
  bodyParser = require('body-parser');
  
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);


module.exports = app
