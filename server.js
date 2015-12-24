var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes')

// Setup the middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Using the HJS (hogan.js) engine to render templates server side
app.set('view engine', 'hjs');
app.set('views', 'app/views');

// set a static file server to run from the app directory
app.use(express.static(__dirname + '/app'));

// set the client for this project, then use the routes file to render things
app.use('/', routes);

app.set('port', process.env.PORT || 10101);

var server = app.listen(app.get('port'), function() {
	console.log("Serving on port " + app.get('port'));
});
