var Video = require('../models/videos.js');

var apiController = {
	addVideo : function(req, res){
		Video.addVideo(req.body.name, req.body.url, req.body.title, req.body.description);
		res.redirect('/');
	},
	deleteVideo : function(req, res){
		Video.removeVideo(req.body.name, req.body.url, req.body.title, req.body.description);
		res.redirect('/');
	}
};

module.exports = apiController;