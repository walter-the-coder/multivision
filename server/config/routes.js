var auth = require('./auth');

module.exports = function(app){
	app.get('/partials/*', function(req, res){ //Henter view basert på linkadressen
		res.render('../../public/app/' + req.params[0]); //Henter view basert på linkadressen
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res){
		req.logout();
		res.end();
	});

	app.get('*', function(req, res){//rendrer index.jade. Denne fungerer som index.html gjør i angular
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
}