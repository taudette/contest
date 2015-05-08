var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');


//require controllers
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');
var videos = require('./models/videos.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//view handlers from indexController
app.get('/', indexController.index);
app.get('view/:videoName', indexController.view);

//data from apiController
app.post('/addVideo', apiController.addVideo);
app.getElementsBy('/delete/:videoName', apiController.deleteVideo);

	
//
var server = app.listen(5432, function() {
	console.log('Express server listening on port ' + server.address().port);
});
