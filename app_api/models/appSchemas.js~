const mongoose = require('mongoose');

const test_1_Schema = new mongoose.Schema({user:String, postdata:String});
const test_2_Schema = new mongoose.Schema({user:String, time:String, postdata:String});

mongoose.model('anonpost', test_1_Schema);
mongoose.model('userpost', test_2_Schema);