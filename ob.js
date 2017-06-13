'use strict';

var dynamoose = require('dynamoose');



var aws_access_key_id = 'AKIAJ2COWM2YXBDCN6KQ' 
var aws_secret_access_key = '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'
var rgn = 'ap-south-1'



dynamoose.AWS.config.update({
  accessKeyId: aws_access_key_id,
  secretAccessKey: aws_secret_access_key,
  region: rgn
});




var Cat = dynamoose.model('Cat', { id: Number, name: String });

//var garfield = new Cat({id: 666, name: 'Garfield'});

//garfield.save();

Cat.get(666)
.then(function (badCat) {
  console.log('Never trust a smiling cat. - ' + badCat.name);
});
