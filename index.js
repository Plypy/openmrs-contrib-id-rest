var Common = require(global.__commonModule);
var app = require('./lib/app');

// This module depends on the oauth module
if (!Common.module.oauth) {
  throw new Error('The OAuth module required!');
}

// Mount the restful server under /api
Common.app.use('/api', app);
