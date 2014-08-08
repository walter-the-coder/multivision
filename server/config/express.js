var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'), //logger
	bodyparser = require('body-parser'),//middleware som blir brukt av mange moduler
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function(app, config){
	app.set('views', config.rootPath + '/server/views'); //Setter opp view mappestruktur for express 'views'
	app.set('view engine', 'jade');//Setter opp jade som template/view engine
	app.use(logger('dev')); //express sin logger funksjon
	//funksjonalitet for login
	app.use(cookieParser());
	app.use(session({secret: 'multi vision unicorns'}));
	app.use(passport.initialize());
	app.use(passport.session());
	//basic bodyparser funksjoner
	app.use(bodyparser.urlencoded({ extended: false }))
	app.use(bodyparser.json())
	app.use(bodyparser.json({ type: 'application/vnd.api+json' }))

	//stylus
	app.use(stylus.middleware(config.rootPath + '/public')); //stylus til .css fil
	app.use(express.static(config.rootPath + '/public')); //statisk default rute. Brukes av stylus bl.a
}