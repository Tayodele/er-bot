fb = require('fbgraph');
var fs = require('fs');
var keyfile = require('~/keys.json');
var keys = JSON.parse(fs.readFileSync(keyfile,'utf8'));
var accessToken = "";

fb.get("458549294216961?fields=access_token", function(err,res){
			console.log(res);
			accessToken = res.access_token;
		});
fb.setAccessToken(accessToken);

var self = {

	postComment: = function(sPost, sComment, callback) {
		oParams = {
			"message": sPost,
		};
		fb.post("/"+sPost+"/comments",oParams,function(res,err){
			console.log(res);
			if(err)
				console.log("error:"+err);
		});
		callback();
	},

	makePost: = function(sMessage,callback) {
		var oPostmsg = {
			"message": sMessage
		};
		fb.post("/feed", oPostmsg, function(err,res){
			console.log(res);
		});
		callback();
	}

};

module.exports = self;