var express = require('express'),
  app = express(),
  Task = require('./api/models/model'),
  bodyParser = require('body-parser');
  
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

