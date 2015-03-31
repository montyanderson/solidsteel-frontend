/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-new-app',
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

    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.API_HOST = 'http://192.168.1.198:3001';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy = {
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://*:35729",
      'font-src': "'self' http://easy.myfonts.net",
      'connect-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' http://cdn.myfonts.net",
      'img-src': "'self' 'unsafe-inline' *",
      'default-src': "'self' 'unsafe-inline' http://*"
    };

    //ENV.APP.DEFAULT_IMAGE = '/assets/images/ss_bg.png';

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://178.62.62.19';
    //ENV.APP.DEFAULT_IMAGE = '/system/mixes/background_images/default_bg.gif';
  }

  return ENV;
};
