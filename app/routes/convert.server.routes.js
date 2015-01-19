'use strict';

module.exports = function(app) {
	console.log('**********************');
    var converter = require('../../app/controllers/converter.server.controller.js');
    // Setting up the users profile api
	app.route('/convert').put(converter.convert);
};