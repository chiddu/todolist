'use strict';

/*
var dynamoose = require('dynamoose'),
Task = dynamoose.model('Tasks');



	app.get('/', function(request, response){
    response.send('You made it to the home page.')
		  });



  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);


};


*/



var alltasks = 

  { "1" : { "id" : 1, "Name" : "Task 1", "desc" : "This is the 1st task, get it done " } ,
	  "2" : { "id" : 2, "Name" : "Task 2", "desc" : "This is the 2nd task, seen it" } ,
		  "3" : { "id" : 3, "Name" : "Task 3", "desc" : "This is the 3rd task, not done" } ,
			  "4" : { "id" : 4, "Name" : "Task 4", "desc" : "This is the 4th task, Done"  }};
	



exports.list_all_tasks = function(req, res) {
    res.json(alltasks);
};




exports.create_a_task = function(req, res) {
    res.json(alltasks["1"]);
};


exports.read_a_task = function(req, res) {
    res.json(alltasks[req.params.taskId]);
};


exports.update_a_task = function(req, res) {
  if(alltasks[req.params.taskId]) {
		alltasks[req.params.taskId] = req.body;
    res.json(alltasks[req.params.taskId]);
	}else
      res.send("Unable to find the apt id");
};


exports.delete_a_task = function(req, res) {
      res.send("Not yet supported");
};


