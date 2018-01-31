const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlOne = require('../controllers/ctrlOne');
const ctrlTwo = require('../controllers/ctrlTwo');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/one', ctrlOne.test1);
router.get('/two', ctrlTwo.wat);

module.exports = router;
