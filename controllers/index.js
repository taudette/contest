//need to acess video in model
var Video = require('../models/videos.js');

var indexController = {
	index: function(req, res) {
		var allVideos = Video.allVideos;
		// console.log(allVideos);
		res.render('index', {
			allVideos: allVideos,
			showForm: Video.showForm()

		});
	},
	// route for viewing a single videos
	view: function(req, res){
		var currentVideo = video.findVideo(req.params.videoName);
		res.render('view', currentVideo);
	
	}
};
 
module.exports = indexController;