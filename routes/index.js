var express = require('express');
var router = express.Router();
var fs = require('fs')



/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('views/index.html', null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File NOT found!');
		}
		else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		}
		res.end();
	});  
});

/* GET register page. */
router.get('/register', function(req, res, next) {
	fs.readFile('views/register.html', null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File NOT found!');
		}
		else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		}
		res.end();
	});  
});


module.exports = router;
