'use strict';

//var rest = require('rest');
//var defaultRequest = require('rest/interceptor/defaultRequest');
//var mime = require('rest/interceptor/mime');
//var uriTemplateInterceptor = require('./api/uriTemplateInterceptor');
//var errorCode = require('rest/interceptor/errorCode');
//var baseRegistry = require('rest/mime/registry');
//
//var registry = baseRegistry.child();
//
//registry.register('text/uri-list', require('./api/uriListConverter'));
//registry.register('application/json', require('rest/mime/type/application/hal'));
//
//module.exports = rest
//		.wrap(mime, { registry: registry })
//		.wrap(uriTemplateInterceptor)
//		.wrap(errorCode)
//		.wrap(defaultRequest, { headers: { 'Accept': 'application/json' }});


var rest = require('rest'),
	mime = require('rest/interceptor/mime'),
	errorCode = require('rest/interceptor/errorCode'),
	defaultRequest = require('rest/interceptor/defaultRequest');

module.exports = rest
			.wrap(mime)
			.wrap(errorCode)
			.wrap(defaultRequest, { headers: { 'Accept': 'application/json' }});