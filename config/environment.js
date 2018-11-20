/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'kitchens-international',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentful: {
      space: 'nma019atkcmp',
      accessToken: '65dd74a5495e2c30dbfd87b0eeb98942eada50d4e8b721f3dfc2885ab8493537',
      previewAccessToken: '38f04962024d568a5983861e7cb3ae999eeed095d8b8f28867e70730c84aa3ad',
      usePreviewApi: false
    },
    disqus: {
      shortname: 'kitchens-international'
    },
    showdown: {
      simplifiedAutoLink: true,
      tables: true,
      simpleLineBreaks: true
    },
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
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentful.usePreviewApi = true;
    ENV.googleAnalytics = {
      webPropertyId: 'UA-8205907-1'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-8205907-1'
    };
  }

  return ENV;
};
