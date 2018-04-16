const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res){
	res.render('two_add');
};

const addData = function(req,res){
	const path = '/api/anonpost';
	
	const postdata = {
		user: req.body.user,
		postdata: req.body.postdata
	};
	
	const requestOptions = {
		url : apiURL.server + path,
		method : 'POST',
		json : postdata
	};
	
	request(
		requestOptions,
		function (err,response){
			if (response.statusCode === 201) {
				res.redirect('/two');
			} else {
				res.render('error', {message: 'Error adding data: '+
				response.statusMessage+
				' ('+response.statusCode + ')'});
			}
		}	
	);
	
};

const wat = function(req, res){
	
	const path = '/api/anonpost';
	const requestOptions = {
		url : apiURL.server + path,
		method : 'GET',
		json : {},
		qs : {}
	};
	
	request(
		requestOptions,
		function (err,response,body){
			if (err){
				res.render('error',{message: err.message});
			} else if (response.statusCode !== 200){
				res.render('error', {message: 'Error accessing api: ' +
				response.statusMessage + "("+response.statusCode+")" });
			} else if (!(body instanceof Array)){
				res.render('error', {message: 'unexpectedf tesponse adta'});
			} else if (!body.length){
				res.render('errior', {message: 'No dovuymenty iun collentiop'});
			} else {
				res.render('two', {user: body});
			}
		}
	);
	
	/* old stuff:
	res.render('two',{
	whatever:
	[
	{index:'0', number:'456'},
	{index:'1', number:'857'},
	{index:'2', number:'184'},
	{index:'3', number:'458'},
	{index:'4', number:'064'},
	{index:'5', number:'375'},
	{index:'6', number:'121'}
	]});*/
};

module.exports = {
	wat,
	showForm,
	addData
};
