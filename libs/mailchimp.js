var fs = require('fs');
var keyfile = './keys.json';
var keys = JSON.parse(fs.readFileSync(keyfile,'utf8'));
var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(keys.mailchimp_key);
var coreList = "eaa08a2c7b";

self = {

	sendEmailtoList: function(aContent,callback) {
		mailchimp.get("/lists/"+coreList+"/members")
		.then(function(result){
			var members = result;
					mailchimp.post("/automations/f4491285cd/emails/41895f2486/queue",{email_address: members.members[0].email_address})
					.then(function(result){
						console.log("here " + result);
					})
					.catch(function(err){
						console.log("Error on send" + err);
					})
		})
		.catch(function(err){
			console.log("Error on list fetch: " + err);
		})
	}
};

module.exports = self;
