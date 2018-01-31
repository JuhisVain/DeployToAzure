var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	res.send('My deployment Github repo can be found at https://github.com/JuhisVain/DeployToAzure');
});

module.exports = router;