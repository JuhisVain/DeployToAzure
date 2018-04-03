const mongoose = require('mongoose');
const userpostModel = mongoose.model('userpost');

const userpostList = function (req, res){
	userpostModel.find({}, function(err,userposts){
		if (err){
			res.status(404).json(err);
		} else {
			res.status(200).json(userposts);
		}
	});
};

const addUserpost = function (req, res){
	userpostModel.create(req.body, function(err, newUserpost){
		if (err){
			res.status(400).json(err);
		} else {
			res.status(201).json(newUserpost);
		}
	});
};

module.exports = {
	userpostList,
	addUserpost
};