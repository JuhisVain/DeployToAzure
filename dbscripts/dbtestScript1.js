db.dropDatabase();	//removes all data, but not database

db.anonpost.save(
	[
		{user:'Einari', postdata:'test test test 1 2 3'},
		{user:'Jorma', postdata:'roskapostia'},
		{user:'Einari', postdata:'yks kaks kolme, ja sillei'},
		{user:'Teemu Selänne', postdata:'vinnipek tests'},
		{user:'posteriuuseri', postdata:'postidataa'},
		{user:'Puuha pete', postdata:'ei näin'}
	]
);

db.userpost.save(
	[
		{user:'Einari',time:'12:23',postdata:'Hoho!'},
		{user:'Einari',time:'12:24',postdata:'testi testi'},
		{user:'tämä on uuseri',time:'tämä on aika',postdata:'tämä on postidata'},
		{user:'mitätääon',time:'vuonna 2000',postdata:'apuva'}
	]
);

