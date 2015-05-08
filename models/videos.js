var allVideos = [];


//fix embed links 
var Embed = function(url){
	var split = url.split('v=');
	return 'https://www.youtube.com/embed/' + split[1];
};

//base class for video
var Video = function (name, url, title, description){
		this.name = name;
		this.url = Embed(url);
		this.title = title;
		this.description = description;
}; 

//helper to add video
var addVideo = function( name, url, title, description){
	var newVideo = new Video(name, url, title, description);
	allVideos.push(newVideo);	

	
};

var clicks = 0;
var vote = function(){
	return clicks +=1;
};
console.log(vote);

//makes boolean showform = true if < 5
var showForm = function(){
	return allVideos.length < 5	;
};

module.exports = {
	showForm: showForm,
	Video: Video,
	allVideos: allVideos,
	addVideo: addVideo,
	vote : vote
};

// Prefill some videos 
var cat1 = new Video('Fail Army', 'https://www.youtube.com/watch?v=AvPNaJ8OWCM','Cats Being Jerks','Cats are mean');
var cat2 = new Video('Tiger',  'www.youtube.com/watch?v=OnqnCoPLdyw', 'Funny Cats annoying owners', 'annoying cats');
var cat3 = new Video('Cole and Marmalade', 'https://www.youtube.com/watch?v=nRzsgCp60YU', 'What cats do at night', 'Cats in the dark');

allVideos.push(cat1);
allVideos.push(cat2);
allVideos.push(cat3);

