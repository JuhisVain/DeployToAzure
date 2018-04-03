const mongoose = require('mongoose');
const anonpostModel = mongoose.model('anonpost');

const anonpostList = function (req, res){
	anonpostModel.find({}, function(err,anonposts){
		if (err){
			res.status(404).json(err);
		} else {
			res.status(200).json(winners);
		}
	});
};

const addAnonpost = function (req, res){
	anonpostModel.create(req.body, function(err, newAnonpost){
		if (err){
			res.status(400).json(err);
		} else {
			res.status(201).json(newAnonpost);
		}
	});
};

module.exports = {
	anonpostList,
	addAnonpost
};