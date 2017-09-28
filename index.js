var fb = require('./libs/facebook.js');
//var fb = require('./libs/facebook.js');

fb.makePost("This is a test",function(err,res){
	console.log(res+" : "+err);
});
/* 
HOW THE BOT WORKS (MOVE THIS TO README LATER)
1. WAIT FOR POST/COMMENT (WEBHOOK)
2. CHECK IF POST IS EVENT FORMAT
YES. SEND INVITES THROUGH Google/ADD PARTICIPANT AND SEND INVITE
NO. COMMENT TO REMIND THAT IT'S ALIVE IF THEY DO MEAN TO SEND A EVENT
*/
