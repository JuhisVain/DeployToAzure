const express = require('express');
const router = express.Router();

const ctrlApiAnonpost = require('../controllers/ctrlApiAnonpost');
const ctrlApiUserpost = require('../controllers/ctrlApiUserpost');

router
	.route('/anonpost')
	.get(ctrlApiAnonpost.anonpostList)
	.post(ctrlApiAnonpost.addAnonpost);

router
	.route('/userpost')
	.get(ctrlApiUserpost.userpostList)
	.post(ctrlApiUserpost.addUserpost);
	
module.exports = router;