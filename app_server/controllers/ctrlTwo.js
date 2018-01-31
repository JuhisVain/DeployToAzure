const wat = function(req, res){
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
	]});
};

module.exports = {
	wat
};
