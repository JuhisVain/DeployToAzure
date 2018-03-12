const mongoose = require('mongoose');

const dbURI = 'mongodb://DBuser:juhojuhojuho@ds111319.mlab.com:11319/jvvmlabdb';

mongoose.connect(dbURI);

//printing connection status messages:
mongoose.connection.on('connected', function(){
	console.log('Mongoose connection success');
});
mongoose.connection.on('error',function(err){
	console.log('mongoose connection error: ',err);
});
mongoose.connection.on('disconnected',function(){
	console.log('Mongoose disconnected');
});

require('./appSchemas');