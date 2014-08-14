var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Chat = mongoose.model('Chat');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {username : req.session['username']});
});

router.post('/username', function(req, res){
	req.session["username"] = req.body.username;
	res.redirect(303, '/');
})

router.post('/message', function(req, res){
	console.log(req.session['username'])
	message = new Chat({ username: req.session['username'], message: req.body.message });
	message.save();
	res.send("success");
})

router.get('/chats', function(req, res) {
	Chat.find({}, function(err, docs){
		if(err){ console.log('error'); }
		res.render('chats', { items : docs });
	})
});

module.exports = router;
