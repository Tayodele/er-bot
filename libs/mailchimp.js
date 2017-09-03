var fs = require('fs');
var keyfile = require('~/keys.json');
var keys = JSON.parse(fs.readFileSync(keyfile,'utf8'));
var Mailchimp = require('mailchimp');
var mailchimp = new Mailchimp(keys.mailchimp_key);
var coreList = "eaa08a2c7b";

self = {

	sendEmailtoList: function(aContent,callback) {
		mailchimp.get("/lists/"+coreList+"/members",{
			"fields": "id,email_address",
			"status": "subscribed"
		}, function(err, res){
			var members = res.members
			members.forEach(function(mem){
				mailchimp.post("/automations/f4491285cd/emails/41895f2486/queue",mem.email_address,function(err,res){
					if(err){
						console.log(err);
					}
				});
			});
		});
		callback();
	},

};

module.exports = self;
