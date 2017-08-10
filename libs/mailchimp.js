var fs = require('fs');
var keyfile = require('~/keys.json');
var keys = JSON.parse(fs.readFileSync(keyfile,'utf8'));
var Mailchimp = require('mailchimp');
var mailchimp = new Mailchimp(keys.mailchimp_key);

self = {

	sendEmailtoList: function(sList,sTemplate,aContent,callback) {
		callback();
	},

};
