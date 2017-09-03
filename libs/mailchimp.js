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
			var members = JSON.parse(result).members;
			console.log(members);
			members.forEach(function(mem){
				if(typeof(mem) != "undefined"){
					mailchimp.post("/automations/f4491285cd/emails/41895f2486/queue",mem.email_address)
					.then()
					.catch(function(err){
						console.log(err);
					})
				}
			});
			callback();
		});
		.catch(function(err){
			console.log(err);
		})
	}
};

module.exports = self;
