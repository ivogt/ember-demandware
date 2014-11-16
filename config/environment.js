/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'demandware',
    podModulePrefix : 'demandware/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }
  
  if (environment === 'test' || environment === 'development') {
    ENV.contentSecurityPolicy = {
     // 'default-src'  : "'none' https://local.demandware.com:4300 http://local.demandware.com:4200",
     // 'script-src'   : "* 'self' 'unsafe-eval' https://local.demandware.com:4300 http://local.demandware.com:4200 https://local.demandware.com:35729 http://local.demandware.com:35729", // Allow scripts from https://cdn.mxpnl.com
     // 'font-src'     : "* 'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
     // 'connect-src'  : "* 'self' https://local.demandware.com:4300 http://local.demandware.com:4200", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
     // 'img-src'      : "* 'self' https://local.demandware.com:4300 http://local.demandware.com:4200",
     // 'style-src'    : "* 'self' 'unsafe-inline' https://local.demandware.com:4300 http://local.demandware.com:4200", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
     // 'media-src'    : "* 'self' https://local.demandware.com:4300 http://local.demandware.com:4200"
    }
  }
  if (environment === 'production') {

  }


 

  return ENV;
};
