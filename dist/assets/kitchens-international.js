"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('kitchens-international/adapters/application', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  exports['default'] = _emberDataContentfulAdaptersContentful['default'].extend({});
});
define('kitchens-international/adapters/contentful', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulAdaptersContentful['default'];
    }
  });
});
define('kitchens-international/app', ['exports', 'ember', 'kitchens-international/resolver', 'ember-load-initializers', 'kitchens-international/config/environment'], function (exports, _ember, _kitchensInternationalResolver, _emberLoadInitializers, _kitchensInternationalConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _kitchensInternationalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kitchensInternationalConfigEnvironment['default'].podModulePrefix,
    Resolver: _kitchensInternationalResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _kitchensInternationalConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('kitchens-international/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'kitchens-international/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _kitchensInternationalConfigEnvironment) {

  var name = _kitchensInternationalConfigEnvironment['default'].APP.name;
  var version = _kitchensInternationalConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('kitchens-international/components/blog-control', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        tagName: 'nav',
        classNames: ['blog-control']
    });
});
define('kitchens-international/components/contact-form-button', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        tagName: 'button',
        classNames: ['btn', 'btn-outline-secondary'],
        attributeBindings: ['data-toggle', 'data-target'],
        'data-toggle': 'modal',
        'data-target': _ember['default'].computed('contact-form', function () {
            return '#' + this.get('form-id');
        }),
        'form-id': 'contact-form'
    });
});
define('kitchens-international/components/contact-form', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['contact-form', 'modal', 'fade'],
        attributeBindings: ['tabindex', 'role', 'aria-hidden'],
        tabindex: '-1',
        role: 'dialog',
        'aria-hidden': 'true'
    });
});
define('kitchens-international/components/disqus-comment-count', ['exports', 'ember-disqus/components/disqus-comment-count'], function (exports, _emberDisqusComponentsDisqusCommentCount) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDisqusComponentsDisqusCommentCount['default'];
    }
  });
});
define('kitchens-international/components/disqus-comments', ['exports', 'ember-disqus/components/disqus-comments'], function (exports, _emberDisqusComponentsDisqusComments) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDisqusComponentsDisqusComments['default'];
    }
  });
});
define('kitchens-international/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('kitchens-international/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('kitchens-international/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('kitchens-international/components/header-nav', ['exports', 'ember'], function (exports, _ember) {

    var ANIMATION_DELAY = 400;
    var NAV_ANIMATION_SPEED = 200;

    function toggleMainMenuHandler() {
        var _this = this;

        var navElement = this.$('nav'),
            timeoutsArray = this.get('timeouts');

        this.clearTimeouts();
        this.startSpinMenuButtonIcon();

        if (this.get('mainMenuVisible') === false) {
            (function () {

                navElement.addClass('nav-visible');

                var menuItems = navElement.find('li');

                var showNavTimeout = _ember['default'].run.later(_this, function () {
                    menuItems.each(function (index) {
                        var menuItemTimeout = _ember['default'].run.later(this, function () {
                            _ember['default'].$(this).addClass('item-visible');
                        }, index * NAV_ANIMATION_SPEED);
                        timeoutsArray.push(menuItemTimeout);
                    });
                }, ANIMATION_DELAY);
                timeoutsArray.push(showNavTimeout);

                var showNavButtonsTimeout = _ember['default'].run.later(_this, function () {
                    this.$('.btn-outline-secondary').removeClass('btn-outline-secondary').addClass('btn-secondary');
                    this.$('.logo-nav').hide();
                    this.$('.logo-menu').show();
                    this.stopSpinMenuButtonIcon();
                    this.showMenuButtonClose();
                }, ANIMATION_DELAY);
                timeoutsArray.push(showNavButtonsTimeout);

                _this.set('mainMenuVisible', true);
            })();
        } else {

            navElement.find('li').removeClass('item-visible');
            var hideNavTimeout = _ember['default'].run.later(this, function () {
                navElement.removeClass('nav-visible');
            }, ANIMATION_DELAY);
            timeoutsArray.push(hideNavTimeout);

            var hideMenuButtonTimeout = _ember['default'].run.later(this, function () {
                this.$('.btn-secondary').removeClass('btn-secondary').addClass('btn-outline-secondary');
                this.$('.logo-nav').show();
                this.$('.logo-menu').hide();
                this.stopSpinMenuButtonIcon();
                this.hideMenuButtonClose();
            }, ANIMATION_DELAY);
            timeoutsArray.push(hideMenuButtonTimeout);

            this.set('mainMenuVisible', false);
        }
    }

    exports['default'] = _ember['default'].Component.extend({
        tagName: 'header',
        startSpinMenuButtonIcon: function startSpinMenuButtonIcon() {
            this.$('i.fa').addClass('fa-spin');
        },
        stopSpinMenuButtonIcon: function stopSpinMenuButtonIcon() {
            this.$('i.fa').removeClass('fa-spin');
        },
        showMenuButtonClose: function showMenuButtonClose() {
            this.$('i.fa').removeClass('fa-navicon').addClass('fa-close');
        },
        hideMenuButtonClose: function hideMenuButtonClose() {
            this.$('i.fa').removeClass('fa-close').addClass('fa-navicon');
        },
        mainMenuVisible: false,
        timeouts: _ember['default'].A(),
        clearTimeouts: function clearTimeouts() {
            this.get('timeouts').forEach(function (timeout) {
                _ember['default'].run.cancel(timeout);
            });
        },
        actions: {
            toggleMainMenu: function toggleMainMenu() {
                _ember['default'].run.debounce(this, toggleMainMenuHandler, 300);
            }
        }
    });
});
define('kitchens-international/components/image-carousel', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['carousel', 'slide'],
        attributeBindings: ['data-ride'],
        "data-ride": 'carousel',
        images: _ember['default'].A(),
        showControls: true,
        showIndicators: false
    });
});
define('kitchens-international/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('kitchens-international/components/pagination-control', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        tagName: 'nav',
        classNames: ['pagination-control'],
        currentPage: 1,
        pageCount: 1,
        pages: _ember['default'].computed('pageCount', function () {
            var pages = [],
                n = 0,
                pageCount = this.get('pageCount');
            for (n; n < pageCount; n++) {
                pages.push(n + 1);
            }
            return pages;
        }),
        canGoBack: _ember['default'].computed('currentPage', function () {
            return this.get('currentPage') > 1;
        }),
        canGoForward: _ember['default'].computed('currentPage', 'pageCount', function () {
            return this.get('currentPage') < this.get('pageCount');
        }),
        onChangePage: null,
        actions: {
            goToPrevious: function goToPrevious() {
                if (this.get('canGoBack')) {
                    this.send('goToPage', this.get('currentPage') - 1);
                }
            },
            goToPage: function goToPage(page) {
                this.sendAction('onChangePage', page);
            },
            goToNext: function goToNext() {
                if (this.get('canGoForward')) {
                    this.send('goToPage', this.get('currentPage') + 1);
                }
            }
        }
    });
});
define('kitchens-international/components/slide-in-wrapper', ['exports', 'ember'], function (exports, _ember) {

    var LEADING_EDGE_ALLOWANCE = 30;

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['slide-in-wrapper'],
        belowTheFold: true,
        position: 'center',
        displayLeft: _ember['default'].computed('position', function () {
            return this.get('position') === 'left';
        }),
        displayRight: _ember['default'].computed('position', function () {
            return this.get('position') === 'right';
        }),
        displayCenter: _ember['default'].computed('position', function () {
            return this.get('position') === 'center';
        }),
        didInsertElement: function didInsertElement() {
            _ember['default'].run.once(this, function () {
                var component = this;
                _ember['default'].$(window).on('scroll', function () {
                    var windowElement = _ember['default'].$(this),
                        componentElement = component.$(),
                        componentOffset = typeof componentElement === 'undefined' ? 0 : componentElement.offset().top,
                        scrollTop = windowElement.scrollTop(),
                        windowHeight = windowElement.height(),
                        fold = scrollTop + windowHeight - LEADING_EDGE_ALLOWANCE;
                    component.set('belowTheFold', componentOffset > fold);
                });
            });
        },
        willDestroyElement: function willDestroyElement() {
            _ember['default'].$(window).off('scroll');
        }
    });
});
define('kitchens-international/components/social-icons', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        tagName: 'p',
        greyIcons: false
    });
});
define('kitchens-international/components/store-locations', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['store-locations'],
        googleMapService: _ember['default'].inject.service('google-map'),
        _center: { lat: 55.9396122, lng: -3.2431527 },
        _zoom: 16,
        _map: null,
        stores: _ember['default'].A(),
        activeStoreSlug: null,
        activeStoreIndex: 0,
        activeStore: _ember['default'].computed('stores', 'stores.[]', 'activeStoreIndex', function () {
            var stores = this.get('stores'),
                count = stores.get('length'),
                index = this.get('activeStoreIndex');
            if (count > 0) {
                index = index >= 0 && index <= count ? index : 0;
                return stores.objectAt(index);
            }
            return _ember['default'].K();
        }),
        setActiveStore: _ember['default'].observer('stores', 'activeStoreSlug', function () {
            var storeSlug = this.get('activeStoreSlug');
            if (storeSlug) {
                var storeIndex = 0;
                this.get('stores').find(function (store, index) {
                    if (store.get('slug') === storeSlug) {
                        storeIndex = index;
                        return true;
                    }
                    return false;
                });
                this.set('activeStoreIndex', storeIndex);
            }
        }),
        updateMapLocationAfterStoreSelect: _ember['default'].observer('activeStore', function () {
            this.get('_map').setCenter(this.get('activeStore.location'));
        }),
        didInsertElement: function didInsertElement() {
            this.get('googleMapService').loadMap(this, '_map', '_center', '_zoom');
        },
        actions: {
            selectStore: function selectStore(index) {
                this.set('activeStoreIndex', index);
            }
        }
    });
});
define('kitchens-international/controllers/application', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        routing: _ember['default'].inject.service('-routing'),
        activeStore: null,
        stores: _ember['default'].computed(function () {
            return this.get('store').query('store', { order: 'fields.town' });
        })
    });
});
define('kitchens-international/controllers/home', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        leadArticle: _ember['default'].computed.alias('model.stories.firstObject')
    });
});
define('kitchens-international/helpers/background-image', ['exports', 'ember'], function (exports, _ember) {
    exports.backgroundImage = backgroundImage;

    function backgroundImage(params /*, hash*/) {
        return _ember['default'].String.htmlSafe('background-image: url(' + params[0] + ')');
    }

    exports['default'] = _ember['default'].Helper.helper(backgroundImage);
});
define('kitchens-international/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  exports.eq = eq;

  function eq(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('kitchens-international/helpers/escape', ['exports', 'ember'], function (exports, _ember) {
    exports.escape = escape;

    function escape(params) {
        return _ember['default'].String.htmlSafe(params.join(''));
    }

    exports['default'] = _ember['default'].Helper.helper(escape);
});
define('kitchens-international/helpers/is-after', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/is-before', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/is-between', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/is-same-or-after', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/is-same-or-before', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/is-same', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-add', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-calendar', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('kitchens-international/helpers/moment-format', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-from-now', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-from', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-subtract', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-to-date', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-to-now', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-to', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('kitchens-international/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('kitchens-international/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('kitchens-international/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('kitchens-international/helpers/odd', ['exports', 'ember'], function (exports, _ember) {
    exports.odd = odd;

    function odd(params) {
        return params[0] % 2;
    }

    exports['default'] = _ember['default'].Helper.helper(odd);
});
define('kitchens-international/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('kitchens-international/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('kitchens-international/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('kitchens-international/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'kitchens-international/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _kitchensInternationalConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_kitchensInternationalConfigEnvironment['default'].APP.name, _kitchensInternationalConfigEnvironment['default'].APP.version)
  };
});
define('kitchens-international/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('kitchens-international/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('kitchens-international/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('kitchens-international/initializers/export-application-global', ['exports', 'ember', 'kitchens-international/config/environment'], function (exports, _ember, _kitchensInternationalConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_kitchensInternationalConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _kitchensInternationalConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_kitchensInternationalConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('kitchens-international/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('kitchens-international/initializers/reopen-route', ['exports', 'ember'], function (exports, _ember) {
	exports.initialize = initialize;

	function initialize() {

		var BASE_TITLE = 'Kitchens International';

		_ember['default'].Route.reopen({

			setPageTitle: function setPageTitle(model) {

				var title = BASE_TITLE;

				if (typeof model !== 'undefined' && model && typeof model.get !== 'undefined' && typeof model.get('title') !== 'undefined') {
					title = model.get('title') + ' | ' + BASE_TITLE;
				}

				_ember['default'].$(document).attr('title', title);
			},

			enter: function enter() {
				this._super.apply(this, arguments);
				this.setPageTitle();
			},

			setupController: function setupController(controller, model) {
				this._super.apply(this, arguments);
				this.setPageTitle(model);
				_ember['default'].$(window).scrollTop(0);
			}

		});
	}

	exports['default'] = {
		name: 'reopen-route',
		initialize: initialize
	};
});
define('kitchens-international/initializers/reopen-router', ['exports', 'ember'], function (exports, _ember) {
    exports.initialize = initialize;

    function initialize() {

        _ember['default'].Router.reopen({
            notifyGoogleAnalytics: (function () {
                if (typeof ga === 'undefined') {
                    return;
                }
                return ga('send', 'pageview', {
                    'page': this.get('url'),
                    'title': this.get('url')
                });
            }).on('didTransition')
        });
    }

    exports['default'] = {
        name: 'reopen-router',
        initialize: initialize
    };
});
define('kitchens-international/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('kitchens-international/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("kitchens-international/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('kitchens-international/models/article', ['exports', 'ember', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _ember, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        title: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        publicationDate: (0, _emberDataAttr['default'])('date'),
        content: (0, _emberDataAttr['default'])('string'),
        snippet: (0, _emberDataAttr['default'])('string'),
        excerpt: _ember['default'].computed('content', 'snippet', function () {
            return this.get('snippet') ? this.get('snippet') : this.get('content').substr(0, 250) + '...';
        }),
        featuredImage: (0, _emberDataRelationships.belongsTo)('contentful-asset')
    });
});
define('kitchens-international/models/contentful-asset', ['exports', 'ember-data-contentful/models/contentful-asset'], function (exports, _emberDataContentfulModelsContentfulAsset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulModelsContentfulAsset['default'];
    }
  });
});
define('kitchens-international/models/contentful', ['exports', 'ember-data-contentful/models/contentful'], function (exports, _emberDataContentfulModelsContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulModelsContentful['default'];
    }
  });
});
define('kitchens-international/models/home-page', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        heading: (0, _emberDataAttr['default'])('string'),
        callToAction: (0, _emberDataAttr['default'])('string'),
        introduction: (0, _emberDataAttr['default'])('string'),
        carouselImages: (0, _emberDataRelationships.hasMany)('contentful-asset'),
        splashHeading: (0, _emberDataAttr['default'])('string'),
        splashContent: (0, _emberDataAttr['default'])('string'),
        splashActionTitle: (0, _emberDataAttr['default'])('string'),
        splashActionLink: (0, _emberDataAttr['default'])('string'),
        textLeftImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        textLeftHeading: (0, _emberDataAttr['default'])('string'),
        textLeftContent: (0, _emberDataAttr['default'])('string'),
        textLeftActionTitle: (0, _emberDataAttr['default'])('string'),
        textLeftActionLink: (0, _emberDataAttr['default'])('string'),
        imageOverlayTop: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        imageOverlayTopHeading: (0, _emberDataAttr['default'])('string'),
        imageOverlayTopContent: (0, _emberDataAttr['default'])('string'),
        imageOverlayTopActionTitle: (0, _emberDataAttr['default'])('string'),
        imageOverlayTopActionLink: (0, _emberDataAttr['default'])('string'),
        textRightImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        textRightHeading: (0, _emberDataAttr['default'])('string'),
        textRightContent: (0, _emberDataAttr['default'])('string'),
        textRightActionTitle: (0, _emberDataAttr['default'])('string'),
        textRightActionLink: (0, _emberDataAttr['default'])('string'),
        imageOverlayBottom: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        imageOverlayBottomHeading: (0, _emberDataAttr['default'])('string'),
        imageOverlayBottomContent: (0, _emberDataAttr['default'])('string'),
        imageOverlayBottomActionTitle: (0, _emberDataAttr['default'])('string'),
        imageOverlayBottomActionLink: (0, _emberDataAttr['default'])('string'),
        houzzImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        houzzProfileLink: (0, _emberDataAttr['default'])('string'),
        houzzIntroduction: (0, _emberDataAttr['default'])('string'),
        houzzCallToAction: (0, _emberDataAttr['default'])('string')
    });
});
define('kitchens-international/models/page', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr) {
    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        town: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        heading: (0, _emberDataAttr['default'])('string'),
        introduction: (0, _emberDataAttr['default'])('string')
    });
});
define('kitchens-international/models/project', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr) {
    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        description: (0, _emberDataAttr['default'])('string')
    });
});
define('kitchens-international/models/store', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        town: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        address: (0, _emberDataAttr['default'])('string'),
        telephone: (0, _emberDataAttr['default'])('string'),
        openingHours: (0, _emberDataAttr['default'])('string'),
        location: (0, _emberDataAttr['default'])('json'),
        description: (0, _emberDataAttr['default'])('string'),
        images: (0, _emberDataRelationships.hasMany)('contentful-asset')
    });
});
define('kitchens-international/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('kitchens-international/router', ['exports', 'ember', 'kitchens-international/config/environment'], function (exports, _ember, _kitchensInternationalConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _kitchensInternationalConfigEnvironment['default'].locationType,
    rootURL: _kitchensInternationalConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('stories');
    this.route('story', { path: 'stories/:slug' });
    this.route('design-service');
    this.route('store', { path: 'store/:slug' });
    this.route('projects', { path: 'projects' });
    this.route('kitchens', { path: 'kitchens' });
    this.route('commerical', { path: 'commerical' });
    this.route('endorsements');
    this.route('events');
    this.route('event');
  });

  exports['default'] = Router;
});
define('kitchens-international/routes/commerical', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/design-service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/endorsements', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/event', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/events', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/home', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('homePage', { 'fields.slug': 'home' }),
                stories: this.get('store').query('article', { limit: 1 })
            });
        }
    });
});
define('kitchens-international/routes/kitchens', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/routes/projects', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'projects' }),
                projects: this.get('store').findAll('project')
            });
        }
    });
});
define('kitchens-international/routes/store', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').queryRecord('store', { 'fields.slug': params.slug });
        },
        setupController: function setupController(controller, model) {
            this._super(controller, model);
            this.controllerFor('application').set('activeStore', model.get('slug'));
        }
    });
});
define('kitchens-international/routes/stories', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.get('store').query('article', { limit: 10 });
        }
    });
});
define('kitchens-international/routes/story', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').queryRecord('article', { 'fields.slug': params.slug });
        }
    });
});
define('kitchens-international/serializers/application', ['exports', 'ember-data-contentful/serializers/contentful'], function (exports, _emberDataContentfulSerializersContentful) {
    exports['default'] = _emberDataContentfulSerializersContentful['default'].extend({
        extractAttributes: function extractAttributes(modelClass, fieldsHash, objHash) {
            var _this = this;

            var attributeKey = undefined;
            var attributes = {};

            if (objHash.sys.type === 'Error') {
                console.warn('[Contentful] ' + objHash.message);
                console.warn('[Contentful] It is possible that ' + objHash.details.type + ':' + objHash.details.id + ' is not published, but is linked in this Entry.');
                return {};
            }

            modelClass.eachAttribute(function (key) {
                attributeKey = _this.keyForAttribute(key, 'deserialize');
                if (fieldsHash && fieldsHash.hasOwnProperty(attributeKey)) {
                    var attributeValue = fieldsHash[attributeKey];
                    if (typeof attributeValue === 'object' && objHash.sys.type !== 'Asset' && typeof attributeValue.sys !== 'undefined') {
                        attributeValue = attributeValue.sys.id;
                    }
                    attributes[key] = attributeValue;
                }
                if (objHash) {
                    attributes['contentType'] = objHash.sys.type === 'Asset' ? 'asset' : objHash.sys.contentType.sys.id;
                    attributes['createdAt'] = objHash.sys.createdAt;
                    attributes['updatedAt'] = objHash.sys.updatedAt;
                }
            });

            return attributes;
        },

        _extractIncludes: function _extractIncludes(store, payload) {
            var _this2 = this;

            if (payload && payload.hasOwnProperty('includes') && typeof payload.includes !== 'undefined') {
                var entries = new Array();
                var assets = new Array();

                if (payload.includes.Entry) {
                    entries = payload.includes.Entry.map(function (item) {
                        return _this2.normalize(store.modelFor(item.sys.contentType.sys.id), item).data;
                    });
                }

                if (payload.includes.Asset) {
                    assets = payload.includes.Asset.map(function (item) {
                        return _this2.normalize(store.modelFor('contentful-asset'), item).data;
                    });
                }

                return entries.concat(assets);
            } else {
                return [];
            }
        }

    });
});
define('kitchens-international/serializers/contentful', ['exports', 'ember-data-contentful/serializers/contentful'], function (exports, _emberDataContentfulSerializersContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulSerializersContentful['default'];
    }
  });
});
define('kitchens-international/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('kitchens-international/services/google-map', ['exports', 'ember'], function (exports, _ember) {

    var MAP_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-HH-O67ZZPb6WvurUD0GWdyRmadOc2TQ';
    var GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDUZixElLb9RuEaiQCcFj7DE_XvVo_HQGM&address=';

    exports['default'] = _ember['default'].Service.extend({

        mapApiLoaded: false,

        loadMap: function loadMap(targetObject, mapProperty, centerProperty, zoomProperty, callback) {
            var _this = this;

            if (this.get('mapApiLoaded')) {
                this.addMap(targetObject, mapProperty, centerProperty, zoomProperty, callback);
            } else {
                _ember['default'].$.getScript(MAP_URL, function () {
                    _this.set('mapApiLoaded', true);
                    _this.addMap(targetObject, mapProperty, centerProperty, zoomProperty, callback);
                });
            }
        },

        addMap: function addMap(targetObject, mapProperty, centerProperty, zoomProperty, callback) {
            var map = new google.maps.Map(targetObject.$('.map')[0], {
                center: targetObject.get(centerProperty),
                zoom: targetObject.get(zoomProperty),
                disableDefaultUI: true,
                gestureHandling: 'none',
                draggable: false,
                zoomControl: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                styles: [{
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#a8a8a8" }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#a8a8a8" }]
                }, {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#a8a8a8" }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#5f5f5f" }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#5f5f5f" }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#939393" }]
                }, {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{ "color": "#5f5f5f" }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#ffffff" }]
                }]
            });
            if (typeof callback !== 'undefined') {
                map.addListener('center_changed', callback);
                map.addListener('zoom_changed', callback);
            }
            targetObject.set(mapProperty, map);
            return map;
        },

        addMarker: function addMarker(map, location, callback, locationMarker) {
            var icon = 'assets/images/map-marker-retailer.png';
            if (locationMarker === true) {
                icon = 'assets/images/map-marker-location.png';
            }
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: icon
            });
            marker.addListener('click', callback);
            return marker;
        },

        removeMarker: function removeMarker(marker) {
            if (marker) {
                marker.setMap(null);
            }
        },

        setMarkerActive: function setMarkerActive(marker) {
            marker.setIcon('assets/images/map-marker-retailer-active.png');
        },

        unsetMarkerActive: function unsetMarkerActive(marker) {
            marker.setIcon('assets/images/map-marker-retailer.png');
        },

        geocode: function geocode(address) {
            return _ember['default'].$.ajax(GEOCODE_URL + encodeURIComponent(address));
        }

    });
});
define('kitchens-international/services/moment', ['exports', 'ember', 'kitchens-international/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _kitchensInternationalConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_kitchensInternationalConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("kitchens-international/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 16
            },
            "end": {
              "line": 10,
              "column": 143
            }
          },
          "moduleName": "kitchens-international/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "footer-logo my-4");
          dom.setAttribute(el1, "src", "/assets/images/ki-logo-white-full.svg");
          dom.setAttribute(el1, "alt", "Kitchens International Logo");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 16
            },
            "end": {
              "line": 13,
              "column": 98
            }
          },
          "moduleName": "kitchens-international/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Request a consultation");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col col-sm-3");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col col-sm-6 text-center");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col col-sm-3 text-right");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [6, 1, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[7] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "header-nav", ["loc", [null, [1, 0], [1, 14]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "routing.currentRouteName", ["loc", [null, [2, 14], [2, 38]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [3, 4], [3, 14]]], 0, 0, 0, 0], ["inline", "store-locations", [], ["stores", ["subexpr", "@mut", [["get", "stores", ["loc", [null, [5, 25], [5, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "activeStoreSlug", ["subexpr", "@mut", [["get", "activeStore", ["loc", [null, [5, 48], [5, 59]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 0], [5, 61]]], 0, 0], ["block", "link-to", ["home"], [], 0, null, ["loc", [null, [10, 16], [10, 155]]]], ["block", "contact-form-button", [], ["class", "mt-4", "form-id", "contact-form"], 1, null, ["loc", [null, [13, 16], [13, 122]]]], ["inline", "social-icons", [], ["class", "mb-4 mt-4"], ["loc", [null, [16, 16], [16, 50]]], 0, 0], ["inline", "contact-form", [], ["id", "contact-form"], ["loc", [null, [21, 0], [21, 34]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kitchens-international/templates/commerical", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/commerical.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/blog-control", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/blog-control.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("News");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("Press / Media");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("Recent Projects");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("Events");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "social-icons", [], ["greyIcons", true, "class", "pull-right"], ["loc", [null, [1, 0], [1, 50]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/contact-form-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/contact-form-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/contact-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/contact-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal-dialog modal-lg");
        dom.setAttribute(el1, "role", "document");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-body");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "container-fluid");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row justify-content-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col col-sm-9 py-3");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "type", "button");
        dom.setAttribute(el7, "class", "close");
        dom.setAttribute(el7, "data-dismiss", "modal");
        dom.setAttribute(el7, "aria-label", "Close");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "aria-hidden", "true");
        var el9 = dom.createTextNode("×");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "text-center");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        dom.setAttribute(el8, "class", "mb-0");
        var el9 = dom.createTextNode("Looking to chat now");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createTextNode("CALL 0845 074 0022");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        dom.setAttribute(el8, "class", "mt-4");
        var el9 = dom.createTextNode("For information and enquiries, please fill in the form below\n                                and we will be delighted to be of assistance.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("form");
        dom.setAttribute(el8, "method", "POST");
        dom.setAttribute(el8, "action", "#");
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "form-group");
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("input");
        dom.setAttribute(el10, "type", "name");
        dom.setAttribute(el10, "class", "form-control");
        dom.setAttribute(el10, "placeholder", "NAME");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "form-group");
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("input");
        dom.setAttribute(el10, "type", "email");
        dom.setAttribute(el10, "class", "form-control");
        dom.setAttribute(el10, "placeholder", "EMAIL");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "form-group");
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("input");
        dom.setAttribute(el10, "type", "phone");
        dom.setAttribute(el10, "class", "form-control");
        dom.setAttribute(el10, "placeholder", "PHONE");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9, "class", "form-group");
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("textarea");
        dom.setAttribute(el10, "name", "message");
        dom.setAttribute(el10, "class", "form-control");
        dom.setAttribute(el10, "placeholder", "MESSAGE");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "type", "submit");
        dom.setAttribute(el9, "class", "btn btn-primary");
        var el10 = dom.createTextNode("Send");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                            ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/header-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "logo logo-nav");
          dom.setAttribute(el1, "src", "/assets/images/ki-logo-white-small.svg");
          dom.setAttribute(el1, "alt", "Kitchens International Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "logo logo-menu");
          dom.setAttribute(el1, "src", "/assets/images/ki-logo-grey-small.svg");
          dom.setAttribute(el1, "alt", "Kitchens International Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 72
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Get in touch");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 40
            },
            "end": {
              "line": 9,
              "column": 63
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 40
            },
            "end": {
              "line": 10,
              "column": 71
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Kitchens");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 40
            },
            "end": {
              "line": 11,
              "column": 83
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Design Service");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 40
            },
            "end": {
              "line": 12,
              "column": 71
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Projects");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 40
            },
            "end": {
              "line": 13,
              "column": 64
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Endorsements");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 40
            },
            "end": {
              "line": 14,
              "column": 69
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Stories");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 40
            },
            "end": {
              "line": 15,
              "column": 62
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Commercial");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 40
            },
            "end": {
              "line": 16,
              "column": 59
            }
          },
          "moduleName": "kitchens-international/templates/components/header-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Contact");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/header-nav.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "btn btn-outline-secondary");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "page-links");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(fragment, [5, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [5]);
        var element5 = dom.childAt(element1, [7]);
        var element6 = dom.childAt(element1, [9]);
        var element7 = dom.childAt(element1, [11]);
        var element8 = dom.childAt(element1, [13]);
        var element9 = dom.childAt(element1, [15]);
        var morphs = new Array(22);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createElementMorph(element0);
        morphs[3] = dom.createMorphAt(element0, 0, 0);
        morphs[4] = dom.createElementMorph(element2);
        morphs[5] = dom.createMorphAt(element2, 0, 0);
        morphs[6] = dom.createElementMorph(element3);
        morphs[7] = dom.createMorphAt(element3, 0, 0);
        morphs[8] = dom.createElementMorph(element4);
        morphs[9] = dom.createMorphAt(element4, 0, 0);
        morphs[10] = dom.createElementMorph(element5);
        morphs[11] = dom.createMorphAt(element5, 0, 0);
        morphs[12] = dom.createElementMorph(element6);
        morphs[13] = dom.createMorphAt(element6, 0, 0);
        morphs[14] = dom.createElementMorph(element7);
        morphs[15] = dom.createMorphAt(element7, 0, 0);
        morphs[16] = dom.createElementMorph(element8);
        morphs[17] = dom.createMorphAt(element8, 0, 0);
        morphs[18] = dom.createElementMorph(element9);
        morphs[19] = dom.createMorphAt(element9, 0, 0);
        morphs[20] = dom.createMorphAt(dom.childAt(element1, [17]), 1, 1);
        morphs[21] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [1, 0], [4, 12]]]], ["block", "contact-form-button", [], ["class", "mr-3", "form-id", "contact-form"], 1, null, ["loc", [null, [5, 0], [5, 96]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [6, 8], [6, 35]]], 0, 0], ["inline", "fa-icon", ["navicon"], ["fixedWidth", true], ["loc", [null, [6, 70], [6, 107]]], 0, 0], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [9, 12], [9, 39]]], 0, 0], ["block", "link-to", ["home"], [], 2, null, ["loc", [null, [9, 40], [9, 75]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [10, 12], [10, 39]]], 0, 0], ["block", "link-to", ["kitchens"], [], 3, null, ["loc", [null, [10, 40], [10, 83]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [11, 12], [11, 39]]], 0, 0], ["block", "link-to", ["design-service"], [], 4, null, ["loc", [null, [11, 40], [11, 95]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [12, 12], [12, 39]]], 0, 0], ["block", "link-to", ["projects"], [], 5, null, ["loc", [null, [12, 40], [12, 83]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [13, 12], [13, 39]]], 0, 0], ["block", "link-to", [], [], 6, null, ["loc", [null, [13, 40], [13, 76]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [14, 12], [14, 39]]], 0, 0], ["block", "link-to", ["stories"], [], 7, null, ["loc", [null, [14, 40], [14, 81]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [15, 12], [15, 39]]], 0, 0], ["block", "link-to", [], [], 8, null, ["loc", [null, [15, 40], [15, 74]]]], ["element", "action", ["toggleMainMenu"], [], ["loc", [null, [16, 12], [16, 39]]], 0, 0], ["block", "link-to", [], [], 9, null, ["loc", [null, [16, 40], [16, 71]]]], ["inline", "social-icons", [], ["greyIcons", true], ["loc", [null, [18, 12], [18, 43]]], 0, 0], ["content", "yield", ["loc", [null, [23, 0], [23, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
    };
  })());
});
define("kitchens-international/templates/components/image-carousel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "kitchens-international/templates/components/image-carousel.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "data-target", "#carousel");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            morphs[1] = dom.createAttrMorph(element2, 'data-slide-to');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["subexpr", "if", [["subexpr", "eq", [["get", "index", ["loc", [null, [4, 24], [4, 29]]], 0, 0, 0, 0], 0], [], ["loc", [null, [4, 20], [4, 32]]], 0, 0], "active"], [], ["loc", [null, [4, 15], [4, 43]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "data-slide-to", ["concat", [["get", "index", ["loc", [null, [4, 86], [4, 91]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: ["image", "index"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "kitchens-international/templates/components/image-carousel.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ol");
          dom.setAttribute(el1, "class", "carousel-indicators");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "images", ["loc", [null, [3, 12], [3, 18]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [5, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "kitchens-international/templates/components/image-carousel.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "card-img-top img-fluid");
          dom.setAttribute(el2, "property", "image");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'src');
          morphs[2] = dom.createAttrMorph(element1, 'alt');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["carousel-item ", ["subexpr", "if", [["subexpr", "eq", [["get", "index", ["loc", [null, [10, 39], [10, 44]]], 0, 0, 0, 0], 0], [], ["loc", [null, [10, 35], [10, 47]]], 0, 0], "active"], [], ["loc", [null, [10, 30], [10, 58]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "image.file.url", ["loc", [null, [11, 51], [11, 65]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "image.title", ["loc", [null, [11, 76], [11, 87]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: ["image", "index"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 24,
              "column": 0
            }
          },
          "moduleName": "kitchens-international/templates/components/image-carousel.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "carousel-control-prev");
          dom.setAttribute(el1, "href", "#carousel");
          dom.setAttribute(el1, "role", "button");
          dom.setAttribute(el1, "data-slide", "prev");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "carousel-control-prev-icon");
          dom.setAttribute(el2, "aria-hidden", "true");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "sr-only");
          var el3 = dom.createTextNode("Previous");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "carousel-control-next");
          dom.setAttribute(el1, "href", "#carousel");
          dom.setAttribute(el1, "role", "button");
          dom.setAttribute(el1, "data-slide", "next");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "carousel-control-next-icon");
          dom.setAttribute(el2, "aria-hidden", "true");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "sr-only");
          var el3 = dom.createTextNode("Next");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/image-carousel.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "carousel-inner");
        dom.setAttribute(el1, "role", "listbox");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showIndicators", ["loc", [null, [1, 6], [1, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [7, 7]]]], ["block", "each", [["get", "images", ["loc", [null, [9, 12], [9, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 4], [13, 13]]]], ["block", "if", [["get", "showControls", ["loc", [null, [15, 6], [15, 18]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [15, 0], [24, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("kitchens-international/templates/components/pagination-control", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "kitchens-international/templates/components/pagination-control.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "page-link");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [0]), 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["page-item go-to-page ", ["subexpr", "if", [["subexpr", "eq", [["get", "currentPage", ["loc", [null, [4, 72], [4, 83]]], 0, 0, 0, 0], ["get", "page", ["loc", [null, [4, 84], [4, 88]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 68], [4, 89]]], 0, 0], "active"], [], ["loc", [null, [4, 63], [4, 100]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["goToPage", ["get", "page", ["loc", [null, [4, 28], [4, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 8], [4, 34]]], 0, 0], ["content", "page", ["loc", [null, [4, 123], [4, 131]]], 0, 0, 0, 0]],
        locals: ["page"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/pagination-control.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "pagination");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "page-link");
        dom.setAttribute(el3, "aria-label", "Previous");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "aria-hidden", "true");
        var el5 = dom.createTextNode("«");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "sr-only");
        var el5 = dom.createTextNode("Previous");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "page-link");
        dom.setAttribute(el3, "aria-label", "Next");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "aria-hidden", "true");
        var el5 = dom.createTextNode("»");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "sr-only");
        var el5 = dom.createTextNode("Next");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element2, 'class');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createAttrMorph(element3, 'class');
        morphs[4] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["page-item go-to-previous ", ["subexpr", "unless", [["get", "canGoBack", ["loc", [null, [2, 75], [2, 84]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [2, 66], [2, 97]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["goToPrevious"], [], ["loc", [null, [2, 8], [2, 33]]], 0, 0], ["block", "each", [["get", "pages", ["loc", [null, [3, 12], [3, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [5, 13]]]], ["attribute", "class", ["concat", ["page-item go-to-next ", ["subexpr", "unless", [["get", "canGoForward", ["loc", [null, [6, 67], [6, 79]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [6, 58], [6, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["goToNext"], [], ["loc", [null, [6, 8], [6, 29]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("kitchens-international/templates/components/slide-in-wrapper", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/slide-in-wrapper.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "belowTheFold", ["loc", [null, [1, 17], [1, 29]]], 0, 0, 0, 0], "below-the-fold", "above-the-fold"], [], ["loc", [null, [1, 12], [1, 65]]], 0, 0], " ", ["subexpr", "if", [["get", "displayLeft", ["loc", [null, [1, 71], [1, 82]]], 0, 0, 0, 0], "slide-in-left"], [], ["loc", [null, [1, 66], [1, 100]]], 0, 0], " ", ["subexpr", "if", [["get", "displayRight", ["loc", [null, [1, 106], [1, 118]]], 0, 0, 0, 0], "slide-in-right"], [], ["loc", [null, [1, 101], [1, 137]]], 0, 0], " ", ["subexpr", "if", [["get", "displayCenter", ["loc", [null, [1, 143], [1, 156]]], 0, 0, 0, 0], "slide-in-center"], [], ["loc", [null, [1, 138], [1, 176]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [2, 0], [2, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/social-icons", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/social-icons.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://facebook.com/kitchensinternational/");
        dom.setAttribute(el1, "target", "_blank");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://twitter.com/kitchensint");
        dom.setAttribute(el1, "target", "_blank");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://youtube.com/channel/UC023IsBhqHfnU7W61SL--Ng");
        dom.setAttribute(el1, "target", "_blank");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://youtube.com/channel/UC023IsBhqHfnU7W61SL--Ng");
        dom.setAttribute(el1, "target", "_blank");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(fragment, [4]);
        var element3 = dom.childAt(fragment, [6]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createAttrMorph(element3, 'class');
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["social-icon ", ["subexpr", "if", [["get", "greyIcons", ["loc", [null, [1, 27], [1, 36]]], 0, 0, 0, 0], "social-icon-grey"], [], ["loc", [null, [1, 22], [1, 57]]], 0, 0], " social-icon-facebook"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["social-icon ", ["subexpr", "if", [["get", "greyIcons", ["loc", [null, [2, 27], [2, 36]]], 0, 0, 0, 0], "social-icon-grey"], [], ["loc", [null, [2, 22], [2, 57]]], 0, 0], " social-icon-twitter"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["social-icon ", ["subexpr", "if", [["get", "greyIcons", ["loc", [null, [3, 27], [3, 36]]], 0, 0, 0, 0], "social-icon-grey"], [], ["loc", [null, [3, 22], [3, 57]]], 0, 0], " social-icon-youtube"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["social-icon ", ["subexpr", "if", [["get", "greyIcons", ["loc", [null, [4, 27], [4, 36]]], 0, 0, 0, 0], "social-icon-grey"], [], ["loc", [null, [4, 22], [4, 57]]], 0, 0], " social-icon-houzz"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/components/store-locations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 20
              },
              "end": {
                "line": 7,
                "column": 69
              }
            },
            "moduleName": "kitchens-international/templates/components/store-locations.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("small");
            var el2 = dom.createTextNode("(");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(")");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
            return morphs;
          },
          statements: [["content", "store.name", ["loc", [null, [7, 46], [7, 60]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 24
                },
                "end": {
                  "line": 14,
                  "column": 73
                }
              },
              "moduleName": "kitchens-international/templates/components/store-locations.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("small");
              var el2 = dom.createTextNode("(");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(")");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
              return morphs;
            },
            statements: [["content", "store.name", ["loc", [null, [14, 50], [14, 64]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 16
              },
              "end": {
                "line": 17,
                "column": 16
              }
            },
            "moduleName": "kitchens-international/templates/components/store-locations.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            dom.setAttribute(el1, "class", "store-title");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                    view store ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element0, 0, 0);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["content", "store.town", ["loc", [null, [13, 44], [13, 58]]], 0, 0, 0, 0], ["block", "if", [["get", "store.name", ["loc", [null, [14, 30], [14, 40]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 24], [14, 80]]]], ["inline", "fa-icon", ["caret-right"], [], ["loc", [null, [16, 31], [16, 56]]], 0, 0]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 20,
              "column": 8
            }
          },
          "moduleName": "kitchens-international/templates/components/store-locations.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-6 col-sm-4 col-md-2");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "py-2 hidden-xs-down select-store");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h5");
          dom.setAttribute(el3, "class", "store-title");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("br");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "py-2 hidden-sm-up");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element3, 0, 0);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          morphs[3] = dom.createAttrMorph(element4, 'class');
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["selectStore", ["get", "index", ["loc", [null, [5, 40], [5, 45]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 17], [5, 47]]], 0, 0], ["content", "store.town", ["loc", [null, [6, 40], [6, 54]]], 0, 0, 0, 0], ["block", "if", [["get", "store.name", ["loc", [null, [7, 26], [7, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 20], [7, 76]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["subexpr", "eq", [["get", "activeStoreIndex", ["loc", [null, [9, 36], [9, 52]]], 0, 0, 0, 0], ["get", "index", ["loc", [null, [9, 53], [9, 58]]], 0, 0, 0, 0]], [], ["loc", [null, [9, 32], [9, 59]]], 0, 0], "hr-dark"], [], ["loc", [null, [9, 27], [9, 71]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "link-to", ["home"], [], 1, null, ["loc", [null, [12, 16], [17, 28]]]]],
        locals: ["store", "index"],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 12
            },
            "end": {
              "line": 30,
              "column": 92
            }
          },
          "moduleName": "kitchens-international/templates/components/store-locations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("view store");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/components/store-locations.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row mb-4");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "map-container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "map");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "store-location");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "address");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "text-white");
        var el5 = dom.createTextNode("T: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [2, 3]);
        var element6 = dom.childAt(element5, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(element5, 1, 1);
        morphs[2] = dom.createMorphAt(element6, 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [3]), 1, 1);
        morphs[4] = dom.createMorphAt(element6, 5, 5);
        return morphs;
      },
      statements: [["block", "each", [["get", "stores", ["loc", [null, [3, 16], [3, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [20, 17]]]], ["inline", "markdown-to-html", [["get", "activeStore.openingHours", ["loc", [null, [26, 27], [26, 51]]], 0, 0, 0, 0]], ["class", "opening-hours text-white"], ["loc", [null, [26, 8], [26, 86]]], 0, 0], ["inline", "markdown-to-html", [["get", "activeStore.address", ["loc", [null, [28, 31], [28, 50]]], 0, 0, 0, 0]], ["class", "text-white"], ["loc", [null, [28, 12], [28, 71]]], 0, 0], ["content", "activeStore.telephone", ["loc", [null, [29, 37], [29, 62]]], 0, 0, 0, 0], ["block", "link-to", ["store", ["get", "activeStore.slug", ["loc", [null, [30, 31], [30, 47]]], 0, 0, 0, 0]], ["class", "btn btn-secondary btn-sm"], 1, null, ["loc", [null, [30, 12], [30, 104]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kitchens-international/templates/design-service", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 16
            },
            "end": {
              "line": 41,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Pre Design Brief");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Our Pre Design Brief meeting is the start and probably the most important step\n                        in the process of creating a great kitchen. Once we have been invited to tender,\n                        our skilled designers will get to know all your needs and wishes.\n                        We understand how you use your current kitchen and how the space relates\n                        to the rest of your home. We become aware of your lifestyle and discuss\n                        the aspirations you have for your new kitchen space.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("We talk about furniture, appliances, work surfaces, lighting and colour.\n                        We encourage you to be honest, outspoken and imaginative as you like.\n                        Bring magazine clippings, material samples, even the colour of your favourite jumper.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("This is your kitchen and we want to make it perfect for you.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 16
            },
            "end": {
              "line": 52,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0001.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Designer");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("The creation of your new kitchen! To understand your every requirement\n                        and ensure your kitchen fulfils your greatest expectations.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 70,
              "column": 16
            },
            "end": {
              "line": 79,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0002.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Design");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("Technician");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Bringing your kitchen design to life. Working with your designer,\n                        Our Design Technicians will create stunning visuals capturing each and\n                        every detail of your new kitchen.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 82,
              "column": 16
            },
            "end": {
              "line": 98,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Create");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("This is where your desires and our skills come together.\n                        Our qualified Designers and Design Technicians will consider in great detail\n                        the information we have gathered. We will then add our professional knowledge\n                        to create a design proposal thatcaptures every aspect of the brief.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("You will be invited into our Design Studio to view our proposals.\n                        Our designs are presented in full colour on computer generated software\n                        that captures every last detail of the kitchen space.\n                        So you can get a real feel for the environment we have created.\n                        Budget costs will also be presented, for your approval.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("At this stage everything is open for discussion and only when you are completely\n                        comfortable with our proposals will we ask you to commission us for the project.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 121,
              "column": 16
            },
            "end": {
              "line": 137,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Project Management");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Everything has been considered, our appointment as your preferred supplier has been formalised.\n                        Now it’s time to turn your kitchen dreams into an everyday reality.\n                        Your project will be allocated to one of our professional project managers.\n                        At this stage we work towards firming up our initial design proposals\n                        and ironing out every small detail.\n                        This is a process that works at your pace, to make the experience straight forward\n                        and enjoyable. Clear communication is paramount to the smooth running of\n                        a kitchen project and our highly experienced Project Managers\n                        will work with all parties involved, to ensure the project runs smoothly and without fuss.\n                        A post installation check will be completed going over all aspects of the work\n                        and making sure you are entirely satisfied with your brand new kitchen.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 140,
              "column": 16
            },
            "end": {
              "line": 149,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0003.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Project Manager");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("The planning and smooth running of your kitchen project.\n                        Delivering the highest quality finish and ensuring you have\n                        a full and clear picture at each stage of the installation through to completion.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 167,
              "column": 16
            },
            "end": {
              "line": 177,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0004.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Logistic");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("Manager");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                        magna aliquam erat volutpat.\n                        Ut wisi enim ad minim veniam, quis nostrud exerci.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 180,
              "column": 16
            },
            "end": {
              "line": 194,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Delivery");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,\n                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl\n                        ut aliquip ex ea commodo consequat. Duis autem vel eum iriure\n                        dolor in hendrerit in vulputate velit esse molestie consequat,\n                        vel illum dolore eu feugiat nulla facilisis at vero eros et\n                        accumsan et iusto odio dignissim qui blandit praesent luptatum\n                        zzril delenit augue duis dolore te feugait nulla facilisi.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 215,
              "column": 16
            },
            "end": {
              "line": 229,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Install");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Your kitchen furniture and components will be collated and delivered through\n                        our very own distribution department ensuring a quality of care is second to none.\n                        On the agreed installation date, our professionally trained installation team\n                        will arrive in liveried vans ready for work. State of the art modern tooling\n                        combined with good old fashioned craftsmanship guarantees the standard of\n                        workmanship will be to your satisfaction.Our qualified installation team will\n                        follow the schedule of works agreed, which can include some specialised materials\n                        such as corian, glass and engineered stone. They take real pride in their work and\n                        treat your kitchen as if it were their very own.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 232,
              "column": 16
            },
            "end": {
              "line": 240,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0005.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Installer");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Safeguarding the smooth and professional installation of your kitchen.\n                        A responsibility that our installers relish.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 257,
              "column": 16
            },
            "end": {
              "line": 267,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5 text-white background-image");
          dom.setAttribute(el1, "style", "background-image: url('/assets/images/ki-about-0006.jpg')");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Aftercare");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("Manager");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Responsible for");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                        magna aliquam erat volutpat.\n                        Ut wisi enim ad minim veniam, quis nostrud exerci.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 270,
              "column": 16
            },
            "end": {
              "line": 284,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/design-service.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("Aftercare");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2, "class", "mb-5");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Your kitchen is in. You're using it every day. You love it. But that's not the end of the story\n                        as far as we're concerned. Naturally, your kitchen comes with a full guarantee.\n                        But we've gone further than that. At the time of installation we have logged the\n                        full serial reference number of each and every appliance in your kitchen.\n                        This information is then uploaded to our computer and a hard copy is created\n                        and filed in your aftercare manual, this ensuring any subsequent service\n                        requirements can be dealt with efficiently and without fuss.\n                        We want to make sure that your kitchen is everything you hoped it would be,\n                        now and for years to come. Even when its yours, we treat it like its ours.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 298,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/design-service.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("The art of consideration");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "p-5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("Our design service");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "p-5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Attention to detail defines our kitchens.\n                    Planned with you, defined by purpose, crafted from the best possible materials\n                    and infused with a unique sense of style.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Louisa, our designer, was very good at listening to exactly what we wanted.\n                Louisa took everything we had discussed on board and the first design was spot on!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Lara DeRighetti");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("You will be invited into our Design Studio to view our proposals.\n                Our designs are presented in full colour on computer generated software that\n                captures every last detail of the kitchen space.\n                So you can get a real feel for the environment we have created.\n                Budget costs will also be presented, for your approval.\n                At this stage everything is open for discussion and only when you are completely\n                comfortable with our proposals will we ask you to commission us for the project.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Nigel Adams");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("From concept to completion the job is extremely well managed, all members of their\n                team who worked on the project were exceptional and the level of workmanship was faultless.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Joelle Reid");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                magna aliquam erat volutpat. Ut wisi enim ad minim veniam,\n                quis nostrud exerci tation ullamcorper suscipit lobortis nisl\n                ut aliquip ex ea.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Commodo Consequat");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("The quality of work by the installations team is second to none and the project was completed on time and within budget.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Joan Beer");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-8 py-5 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Just had Steven from Aftercare visit and was reminded why I have chosen KI for all of my kitchens to date.\n                From design, choice, installation to after sales care, they are in my opinion the best in the business.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("- Andrew Fairlie");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4, 1, 1]);
        var element1 = dom.childAt(fragment, [8, 1, 1]);
        var element2 = dom.childAt(fragment, [12, 1, 1]);
        var element3 = dom.childAt(fragment, [16, 1, 1]);
        var element4 = dom.childAt(fragment, [20, 1, 1]);
        var element5 = dom.childAt(fragment, [24, 1, 1]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        morphs[11] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
        morphs[12] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "fa-icon", ["chevron-down"], ["size", "lg"], ["loc", [null, [3, 4], [3, 40]]], 0, 0], ["block", "slide-in-wrapper", [], ["position", "left"], 0, null, ["loc", [null, [26, 16], [41, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 1, null, ["loc", [null, [44, 16], [52, 37]]]], ["block", "slide-in-wrapper", [], ["position", "left"], 2, null, ["loc", [null, [70, 16], [79, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 3, null, ["loc", [null, [82, 16], [98, 37]]]], ["block", "slide-in-wrapper", [], ["position", "left"], 4, null, ["loc", [null, [121, 16], [137, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 5, null, ["loc", [null, [140, 16], [149, 37]]]], ["block", "slide-in-wrapper", [], ["position", "left"], 6, null, ["loc", [null, [167, 16], [177, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 7, null, ["loc", [null, [180, 16], [194, 37]]]], ["block", "slide-in-wrapper", [], ["position", "left"], 8, null, ["loc", [null, [215, 16], [229, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 9, null, ["loc", [null, [232, 16], [240, 37]]]], ["block", "slide-in-wrapper", [], ["position", "left"], 10, null, ["loc", [null, [257, 16], [267, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 11, null, ["loc", [null, [270, 16], [284, 37]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11]
    };
  })());
});
define("kitchens-international/templates/endorsements", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/endorsements.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/event", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/event.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/events", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/events.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 16
            },
            "end": {
              "line": 35,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "btn btn-outline-primary");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(element4, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element4, 5, 5);
          morphs[2] = dom.createAttrMorph(element5, 'href');
          morphs[3] = dom.createMorphAt(element5, 0, 0);
          return morphs;
        },
        statements: [["content", "model.content.textLeftHeading", ["loc", [null, [30, 24], [30, 57]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.textLeftContent", ["loc", [null, [32, 39], [32, 68]]], 0, 0, 0, 0]], [], ["loc", [null, [32, 20], [32, 70]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.textLeftActionLink", ["loc", [null, [33, 31], [33, 63]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.textLeftActionTitle", ["loc", [null, [33, 99], [33, 136]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 16
            },
            "end": {
              "line": 40,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "img-fluid");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createAttrMorph(element3, 'alt');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "model.content.textLeftImage.file.url", ["loc", [null, [39, 46], [39, 82]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "model.content.textLeftImage.title", ["loc", [null, [39, 93], [39, 126]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 16
            },
            "end": {
              "line": 64,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-5");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "btn btn-outline-primary");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element1, 5, 5);
          morphs[2] = dom.createAttrMorph(element2, 'href');
          morphs[3] = dom.createMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["content", "model.content.textRightHeading", ["loc", [null, [59, 24], [59, 58]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.textRightContent", ["loc", [null, [61, 39], [61, 69]]], 0, 0, 0, 0]], [], ["loc", [null, [61, 20], [61, 71]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.textRightActionLink", ["loc", [null, [62, 31], [62, 64]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.textRightActionTitle", ["loc", [null, [62, 100], [62, 138]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 67,
              "column": 16
            },
            "end": {
              "line": 69,
              "column": 16
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "img-fluid");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createAttrMorph(element0, 'alt');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "model.content.textRightImage.file.url", ["loc", [null, [68, 46], [68, 83]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "model.content.textRightImage.title", ["loc", [null, [68, 94], [68, 128]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 88,
              "column": 28
            },
            "end": {
              "line": 88,
              "column": 55
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Events");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 28
            },
            "end": {
              "line": 92,
              "column": 58
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Event Name");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 97,
              "column": 24
            },
            "end": {
              "line": 97,
              "column": 86
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("View event");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 104,
              "column": 28
            },
            "end": {
              "line": 104,
              "column": 57
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Stories");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 108,
              "column": 28
            },
            "end": {
              "line": 108,
              "column": 86
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "leadArticle.title", ["loc", [null, [108, 65], [108, 86]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 111,
              "column": 24
            },
            "end": {
              "line": 111,
              "column": 102
            }
          },
          "moduleName": "kitchens-international/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Read more");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 131,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-outline-secondary my-3");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-12 col-sm-10 py-5 text-center text-lg");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "card mb-5");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card-block d-flex justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-8 text-center py-3");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4, "class", "card-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "btn btn-outline-primary");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe mb-5");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row mb-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row d-flex justify-content-center image-overlay mb-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-10 col-sm-8 text-white text-center py-5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.setAttribute(el5, "class", "hr-white hidden-sm-down");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "btn btn-outline-secondary");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row mb-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row justify-content-center image-overlay mb-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-10 col-sm-8 text-white text-center py-5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.setAttribute(el5, "class", "hr-white hidden-sm-down");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "btn btn-outline-secondary");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row mb-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card card-no-border");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "card-block");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "class", "card-img-top img-fluid mt-2 mb-3");
        dom.setAttribute(el7, "src", "/assets/images/ki-home-0006.jpg");
        dom.setAttribute(el7, "alt", "Card image cap");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createElement("small");
        var el9 = dom.createTextNode("01/04/2017");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "card-text");
        var el8 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                            quis nostrud exercitation ullamco laboris nisi ut aliquip...");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col background-white");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card card-no-border background-white");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "card-block");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "class", "card-img-top img-fluid mt-2 mb-3");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        dom.setAttribute(el7, "class", "card-title");
        var el8 = dom.createElement("small");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "card-text");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card card-no-border");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "card-block");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "target", "_blank");
        var el9 = dom.createTextNode("Houzz");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "class", "card-img-top img-fluid mt-2 mb-3");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "target", "_blank");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "houzz-logo mb-2");
        dom.setAttribute(el8, "src", "/assets/images/houzz-logo.png");
        dom.setAttribute(el8, "alt", "Houzz logo link to Kitchens International");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "target", "_blank");
        dom.setAttribute(el7, "class", "btn btn-outline-primary");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0]);
        var element7 = dom.childAt(fragment, [4]);
        var element8 = dom.childAt(element7, [3, 1]);
        var element9 = dom.childAt(element8, [7]);
        var element10 = dom.childAt(fragment, [6, 1]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element10, [3]);
        var element13 = dom.childAt(element12, [1]);
        var element14 = dom.childAt(element13, [7]);
        var element15 = dom.childAt(fragment, [8, 1]);
        var element16 = dom.childAt(element15, [1]);
        var element17 = dom.childAt(element15, [3]);
        var element18 = dom.childAt(element17, [1]);
        var element19 = dom.childAt(element18, [7]);
        var element20 = dom.childAt(fragment, [10, 1, 1]);
        var element21 = dom.childAt(element20, [1, 1, 1]);
        var element22 = dom.childAt(element20, [3, 1, 1]);
        var element23 = dom.childAt(element22, [5]);
        var element24 = dom.childAt(element22, [7]);
        var element25 = dom.childAt(element20, [5, 1, 1]);
        var element26 = dom.childAt(element25, [1, 0]);
        var element27 = dom.childAt(element25, [5]);
        var element28 = dom.childAt(element25, [7]);
        var element29 = dom.childAt(element25, [14]);
        var morphs = new Array(40);
        morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element6, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(element6, 6, 6);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(element7, 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element8, [1]), 0, 0);
        morphs[6] = dom.createMorphAt(element8, 5, 5);
        morphs[7] = dom.createAttrMorph(element9, 'href');
        morphs[8] = dom.createMorphAt(element9, 0, 0);
        morphs[9] = dom.createMorphAt(dom.childAt(element11, [1]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element11, [3]), 1, 1);
        morphs[11] = dom.createAttrMorph(element12, 'style');
        morphs[12] = dom.createMorphAt(dom.childAt(element13, [1]), 0, 0);
        morphs[13] = dom.createMorphAt(element13, 5, 5);
        morphs[14] = dom.createAttrMorph(element14, 'href');
        morphs[15] = dom.createMorphAt(element14, 0, 0);
        morphs[16] = dom.createMorphAt(dom.childAt(element16, [1]), 1, 1);
        morphs[17] = dom.createMorphAt(dom.childAt(element16, [3]), 1, 1);
        morphs[18] = dom.createAttrMorph(element17, 'style');
        morphs[19] = dom.createMorphAt(dom.childAt(element18, [1]), 0, 0);
        morphs[20] = dom.createMorphAt(element18, 5, 5);
        morphs[21] = dom.createAttrMorph(element19, 'href');
        morphs[22] = dom.createMorphAt(element19, 0, 0);
        morphs[23] = dom.createMorphAt(dom.childAt(element21, [1]), 0, 0);
        morphs[24] = dom.createMorphAt(dom.childAt(element21, [7]), 3, 3);
        morphs[25] = dom.createMorphAt(element21, 13, 13);
        morphs[26] = dom.createMorphAt(dom.childAt(element22, [1]), 0, 0);
        morphs[27] = dom.createAttrMorph(element23, 'src');
        morphs[28] = dom.createAttrMorph(element23, 'alt');
        morphs[29] = dom.createMorphAt(dom.childAt(element24, [0]), 0, 0);
        morphs[30] = dom.createMorphAt(element24, 3, 3);
        morphs[31] = dom.createMorphAt(dom.childAt(element22, [11]), 0, 0);
        morphs[32] = dom.createMorphAt(element22, 13, 13);
        morphs[33] = dom.createAttrMorph(element26, 'href');
        morphs[34] = dom.createAttrMorph(element27, 'src');
        morphs[35] = dom.createAttrMorph(element27, 'alt');
        morphs[36] = dom.createAttrMorph(element28, 'href');
        morphs[37] = dom.createMorphAt(element25, 12, 12);
        morphs[38] = dom.createAttrMorph(element29, 'href');
        morphs[39] = dom.createMorphAt(element29, 0, 0);
        return morphs;
      },
      statements: [["content", "model.content.heading", ["loc", [null, [2, 8], [2, 33]]], 0, 0, 0, 0], ["content", "model.content.callToAction", ["loc", [null, [3, 51], [3, 81]]], 0, 0, 0, 0], ["inline", "fa-icon", ["chevron-down"], ["size", "lg"], ["loc", [null, [4, 4], [4, 40]]], 0, 0], ["inline", "markdown-to-html", [["get", "model.content.introduction", ["loc", [null, [9, 31], [9, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [9, 12], [9, 59]]], 0, 0], ["inline", "image-carousel", [], ["id", "carousel", "images", ["subexpr", "@mut", [["get", "model.content.carouselImages", ["loc", [null, [14, 42], [14, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "carousel-home"], ["loc", [null, [14, 4], [14, 94]]], 0, 0], ["content", "model.content.splashHeading", ["loc", [null, [17, 35], [17, 66]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.splashContent", ["loc", [null, [19, 31], [19, 58]]], 0, 0, 0, 0]], ["class", "card-text"], ["loc", [null, [19, 12], [19, 78]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.splashActionLink", ["loc", [null, [20, 23], [20, 53]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.splashActionTitle", ["loc", [null, [20, 89], [20, 124]]], 0, 0, 0, 0], ["block", "slide-in-wrapper", [], ["position", "left"], 0, null, ["loc", [null, [28, 16], [35, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 1, null, ["loc", [null, [38, 16], [40, 37]]]], ["attribute", "style", ["subexpr", "background-image", [["get", "model.content.imageOverlayTop.file.url", ["loc", [null, [43, 99], [43, 137]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [43, 139]]], 0, 0], 0, 0, 0, 0], ["content", "model.content.imageOverlayTopHeading", ["loc", [null, [45, 20], [45, 60]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.imageOverlayTopContent", ["loc", [null, [47, 35], [47, 71]]], 0, 0, 0, 0]], [], ["loc", [null, [47, 16], [47, 73]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.imageOverlayTopActionLink", ["loc", [null, [48, 27], [48, 66]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.imageOverlayTopActionTitle", ["loc", [null, [48, 104], [48, 148]]], 0, 0, 0, 0], ["block", "slide-in-wrapper", [], ["position", "left"], 2, null, ["loc", [null, [57, 16], [64, 37]]]], ["block", "slide-in-wrapper", [], ["position", "right"], 3, null, ["loc", [null, [67, 16], [69, 37]]]], ["attribute", "style", ["subexpr", "background-image", [["get", "model.content.imageOverlayBottom.file.url", ["loc", [null, [72, 92], [72, 133]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [72, 135]]], 0, 0], 0, 0, 0, 0], ["content", "model.content.imageOverlayBottomHeading", ["loc", [null, [74, 20], [74, 63]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.imageOverlayBottomContent", ["loc", [null, [76, 35], [76, 74]]], 0, 0, 0, 0]], [], ["loc", [null, [76, 16], [76, 76]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.imageOverlayBottomActionLink", ["loc", [null, [77, 27], [77, 69]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.imageOverlayBottomActionTitle", ["loc", [null, [77, 107], [77, 154]]], 0, 0, 0, 0], ["block", "link-to", ["events"], [], 4, null, ["loc", [null, [88, 28], [88, 67]]]], ["block", "link-to", ["event"], [], 5, null, ["loc", [null, [92, 28], [92, 70]]]], ["block", "link-to", ["event"], ["class", "btn btn-outline-primary"], 6, null, ["loc", [null, [97, 24], [97, 98]]]], ["block", "link-to", ["stories"], [], 7, null, ["loc", [null, [104, 28], [104, 69]]]], ["attribute", "src", ["concat", [["get", "leadArticle.featuredImage.file.url", ["loc", [null, [106, 77], [106, 111]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "leadArticle.featuredImage.title", ["loc", [null, [106, 122], [106, 153]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "moment-format", [["get", "leadArticle.publicationDate", ["loc", [null, [107, 70], [107, 97]]], 0, 0, 0, 0], "MM/DD/YYYY"], [], ["loc", [null, [107, 54], [107, 112]]], 0, 0], ["block", "link-to", ["story", ["get", "leadArticle.slug", ["loc", [null, [108, 47], [108, 63]]], 0, 0, 0, 0]], [], 8, null, ["loc", [null, [108, 28], [108, 98]]]], ["content", "leadArticle.excerpt", ["loc", [null, [110, 45], [110, 68]]], 0, 0, 0, 0], ["block", "link-to", ["story", ["get", "leadArticle.slug", ["loc", [null, [111, 43], [111, 59]]], 0, 0, 0, 0]], ["class", "btn btn-outline-primary"], 9, null, ["loc", [null, [111, 24], [111, 114]]]], ["attribute", "href", ["concat", [["get", "model.content.houzzProfileLink", ["loc", [null, [118, 55], [118, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "model.content.houzzImage.file.url", ["loc", [null, [120, 77], [120, 110]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "model.content.houzzImage.title", ["loc", [null, [120, 121], [120, 151]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "model.content.houzzProfileLink", ["loc", [null, [121, 51], [121, 81]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.houzzIntroduction", ["loc", [null, [123, 43], [123, 74]]], 0, 0, 0, 0]], ["class", "card-text"], ["loc", [null, [123, 24], [123, 94]]], 0, 0], ["attribute", "href", ["concat", [["get", "model.content.houzzProfileLink", ["loc", [null, [124, 51], [124, 81]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.content.houzzCallToAction", ["loc", [null, [124, 117], [124, 152]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
    };
  })());
});
define("kitchens-international/templates/kitchens", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/kitchens.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/projects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/projects.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid pt-5");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-10");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["content", "model.content.heading", ["loc", [null, [2, 8], [2, 33]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "model.content.introduction", ["loc", [null, [7, 31], [7, 57]]], 0, 0, 0, 0]], ["class", "text-center"], ["loc", [null, [7, 12], [7, 79]]], 0, 0], ["content", "outlet", ["loc", [null, [10, 4], [10, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kitchens-international/templates/store", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "kitchens-international/templates/store.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.name", ["loc", [null, [4, 12], [4, 26]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 12
            },
            "end": {
              "line": 21,
              "column": 12
            }
          },
          "moduleName": "kitchens-international/templates/store.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-4");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "img-fluid");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "image.file.url", ["loc", [null, [19, 28], [19, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: ["image"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/store.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid pt-5 pb-4");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-10");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe mb-5");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.town", ["loc", [null, [2, 8], [2, 22]]], 0, 0, 0, 0], ["block", "if", [["get", "model.name", ["loc", [null, [3, 10], [3, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 4], [5, 11]]]], ["inline", "markdown-to-html", [["get", "model.description", ["loc", [null, [10, 31], [10, 48]]], 0, 0, 0, 0]], ["class", "text-center"], ["loc", [null, [10, 12], [10, 70]]], 0, 0], ["block", "each", [["get", "model.images", ["loc", [null, [17, 20], [17, 32]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [17, 12], [21, 21]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kitchens-international/templates/stories", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 12
              },
              "end": {
                "line": 19,
                "column": 12
              }
            },
            "moduleName": "kitchens-international/templates/stories.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-12 col-sm-6 img-container");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2, "class", "img-fluid");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createAttrMorph(element1, 'alt');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "article.featuredImage.file.url", ["loc", [null, [17, 46], [17, 76]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "article.featuredImage.title", ["loc", [null, [17, 87], [17, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 16
              },
              "end": {
                "line": 24,
                "column": 95
              }
            },
            "moduleName": "kitchens-international/templates/stories.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Read more");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 12
              },
              "end": {
                "line": 31,
                "column": 12
              }
            },
            "moduleName": "kitchens-international/templates/stories.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-12 col-sm-6 img-container");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2, "class", "img-fluid");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createAttrMorph(element0, 'alt');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "article.featuredImage.file.url", ["loc", [null, [29, 46], [29, 76]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", [["get", "article.featuredImage.title", ["loc", [null, [29, 87], [29, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "kitchens-international/templates/stories.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "background-taupe mb-3");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container-fluid");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-12 col-sm-6 py-4");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          var el6 = dom.createElement("small");
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("h3");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("br");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("hr");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0, 1, 1]);
          var element3 = dom.childAt(element2, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [1, 0]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(element3, 5, 5);
          morphs[4] = dom.createMorphAt(element3, 7, 7);
          morphs[5] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "odd", [["get", "index", ["loc", [null, [15, 23], [15, 28]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 18], [15, 29]]], 0, 0]], [], 0, null, ["loc", [null, [15, 12], [19, 19]]]], ["inline", "moment-format", [["get", "article.publicationDate", ["loc", [null, [21, 42], [21, 65]]], 0, 0, 0, 0], "MMMM DD, YYYY"], [], ["loc", [null, [21, 26], [21, 83]]], 0, 0], ["content", "article.title", ["loc", [null, [22, 20], [22, 37]]], 0, 0, 0, 0], ["inline", "markdown-to-html", [["get", "article.excerpt", ["loc", [null, [23, 35], [23, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [23, 16], [23, 52]]], 0, 0], ["block", "link-to", ["story", ["get", "article.slug", ["loc", [null, [24, 35], [24, 47]]], 0, 0, 0, 0]], ["class", "btn btn-outline-primary mb-3"], 1, null, ["loc", [null, [24, 16], [24, 107]]]], ["block", "unless", [["subexpr", "odd", [["get", "index", ["loc", [null, [27, 27], [27, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 22], [27, 33]]], 0, 0]], [], 2, null, ["loc", [null, [27, 12], [31, 23]]]]],
        locals: ["article", "index"],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/stories.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Our news");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe mb-3");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row justify-content-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid py-4");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row justify-content-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "blog-control", [], ["class", "col-11"], ["loc", [null, [7, 12], [7, 43]]], 0, 0], ["block", "each", [["get", "model", ["loc", [null, [11, 8], [11, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 0], [35, 9]]]], ["content", "pagination-control", ["loc", [null, [38, 8], [38, 30]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("kitchens-international/templates/story", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 19
            },
            "end": {
              "line": 8,
              "column": 96
            }
          },
          "moduleName": "kitchens-international/templates/story.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("view all stories");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "kitchens-international/templates/story.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "background-taupe mb-5");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("article");
        dom.setAttribute(el4, "class", "col py-5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2, 1, 1, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        morphs[5] = dom.createMorphAt(element1, 7, 7);
        morphs[6] = dom.createMorphAt(element1, 9, 9);
        return morphs;
      },
      statements: [["attribute", "style", ["subexpr", "background-image", [["get", "model.featuredImage.file.url", ["loc", [null, [1, 62], [1, 90]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [1, 92]]], 0, 0], 0, 0, 0, 0], ["content", "model.title", ["loc", [null, [2, 8], [2, 23]]], 0, 0, 0, 0], ["block", "link-to", ["stories"], ["class", "btn btn-outline-primary btn-sm"], 0, null, ["loc", [null, [8, 19], [8, 108]]]], ["content", "model.title", ["loc", [null, [9, 20], [9, 35]]], 0, 0, 0, 0], ["inline", "moment-format", [["get", "model.publicationDate", ["loc", [null, [10, 35], [10, 56]]], 0, 0, 0, 0], "MMMM DD, YYYY"], [], ["loc", [null, [10, 19], [10, 74]]], 0, 0], ["inline", "markdown-to-html", [["get", "model.content", ["loc", [null, [11, 35], [11, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [11, 16], [11, 50]]], 0, 0], ["inline", "disqus-comments", [], ["identifier", ["subexpr", "@mut", [["get", "model.slug", ["loc", [null, [12, 45], [12, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "title", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [12, 62], [12, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "mt-5"], ["loc", [null, [12, 16], [12, 88]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('kitchens-international/transforms/json', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Transform.extend({
        deserialize: function deserialize(serialized) {
            return { lat: serialized.lat, lng: serialized.lon }; // google map format
        },

        serialize: function serialize(deserialized) {
            return { lat: deserialized.lat, lon: deserialized.lng }; // contentful format
        }
    });
});
define('kitchens-international/utils/disqus-cache', ['exports', 'ember-disqus/utils/disqus-cache'], function (exports, _emberDisqusUtilsDisqusCache) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDisqusUtilsDisqusCache['default'];
    }
  });
});
define('kitchens-international/utils/load-disqus-api', ['exports', 'ember-disqus/utils/load-filepicker-api'], function (exports, _emberDisqusUtilsLoadFilepickerApi) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDisqusUtilsLoadFilepickerApi['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('kitchens-international/config/environment', ['ember'], function(Ember) {
  var prefix = 'kitchens-international';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("kitchens-international/app")["default"].create({"name":"kitchens-international","version":"1.0.0+cc100f3a"});
}

/* jshint ignore:end */
//# sourceMappingURL=kitchens-international.map
