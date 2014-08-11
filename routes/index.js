var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.post('/message', function(req, res){
	var db = req.db;
	message = new Chat({ message: req.body.message });
	message.save();
	res.send("success");
})

router.get('/chats', function(req, res) {
	var db = req.db;
	chats = db.model('Chat');
	chats.find({}, function(err, docs){
		if(err){ console.log('error'); }
		res.render('chats', { items : docs });
	})
});

module.exports = router;
