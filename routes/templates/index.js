var _ = require('lodash');
var moment = require('moment');

var renderTemplate = function(res, params) {
	return res.render('index', _.merge({
		header: {
			link: '',
			text: ''
		},
		partials: {
			header: 'header'
		}
	}, params));
};

exports.welcome = function(req, res) {
	return renderTemplate(res, {
		title: "Hello",
		content: { pageTitle: 'Hello' },
		partials: {
			welcome: 'index'
		}
	});
};
