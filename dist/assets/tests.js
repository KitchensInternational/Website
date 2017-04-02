define('kitchens-international/tests/adapters/application', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  'use strict';

  exports['default'] = _emberDataContentfulAdaptersContentful['default'].extend({});
});
define('kitchens-international/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('kitchens-international/tests/app', ['exports', 'ember', 'kitchens-international/tests/resolver', 'ember-load-initializers', 'kitchens-international/tests/config/environment'], function (exports, _ember, _kitchensInternationalTestsResolver, _emberLoadInitializers, _kitchensInternationalTestsConfigEnvironment) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _kitchensInternationalTestsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kitchensInternationalTestsConfigEnvironment['default'].podModulePrefix,
    Resolver: _kitchensInternationalTestsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _kitchensInternationalTestsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('kitchens-international/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/header-nav', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    var BREAK_FADE_SPEED = 300;
    var NAV_ANIMATION_SPEED = 600;
    var PAGE_LINK_SLIDE_SPEED = 700;

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
        actions: {
            toggleMainMenu: function toggleMainMenu() {
                var component = this;
                component.startSpinMenuButtonIcon();
                if (component.get('mainMenuVisible') === false) {
                    component.$('.btn-outline-secondary').removeClass('btn-outline-secondary').addClass('btn-secondary');
                    component.$('nav').animate({ width: '100%', height: '100%' }, NAV_ANIMATION_SPEED, function () {
                        component.$('.logo-nav').hide();
                        component.$('.logo-menu').show();
                        component.$('nav ul.menu-break').fadeIn(BREAK_FADE_SPEED, function () {
                            component.$('nav ul.page-links').slideDown(PAGE_LINK_SLIDE_SPEED, function () {
                                component.stopSpinMenuButtonIcon();
                                component.showMenuButtonClose();
                                component.set('mainMenuVisible', true);
                            });
                        });
                    });
                } else {
                    component.$('.btn-secondary').removeClass('btn-secondary').addClass('btn-outline-secondary');
                    component.$('nav ul.page-links').slideUp(PAGE_LINK_SLIDE_SPEED, function () {
                        component.$('nav ul.menu-break').fadeOut(BREAK_FADE_SPEED, function () {
                            component.$('.logo-nav').show();
                            component.$('.logo-menu').hide();
                            component.$('nav').animate({ height: '0%', width: '0%' }, NAV_ANIMATION_SPEED, function () {
                                component.stopSpinMenuButtonIcon();
                                component.hideMenuButtonClose();
                                component.set('mainMenuVisible', false);
                            });
                        });
                    });
                }
            }
        }
    });
});
define('kitchens-international/tests/components/header-nav.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/header-nav.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-nav.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/store-locations', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['store-locations'],
        googleMapService: _ember['default'].inject.service('google-map'),
        _center: { lat: 55.9396122, lng: -3.2431527 },
        _zoom: 16,
        _map: null,
        stores: _ember['default'].A(),
        activeStoreIndex: 0,
        activeStore: _ember['default'].computed('stores', 'stores.[]', 'activeStoreIndex', function () {
            var stores = this.get('stores'),
                count = stores.get('length'),
                index = this.get('activeStoreIndex');
            if (count > 0) {
                index = index >= 0 && index <= count ? index : 0;
                return stores[index];
            }
            return _ember['default'].K();
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
define('kitchens-international/tests/components/store-locations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/store-locations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/store-locations.js should pass jshint.');
  });
});
define('kitchens-international/tests/controllers/application', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        routing: _ember['default'].inject.service('-routing')
    });
});
define('kitchens-international/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('kitchens-international/tests/controllers/home', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        stores: [_ember['default'].Object.create({
            town: 'Edinburgh',
            name: 'Westfield',
            address: '24 Westfield Road, Murrayfield, Edinburgh',
            postcode: 'EH11 2QB',
            telephone: '0131 337 3434',
            location: {
                lat: 55.9396122,
                lng: -3.2431527
            }
        }), _ember['default'].Object.create({
            town: 'Edinburgh',
            name: 'Dundas',
            address: '117 Dundas Street, Edinburgh',
            postcode: 'EH3 5EF',
            telephone: '0131 523 0477',
            location: {
                lat: 55.9604924,
                lng: -3.2024972
            }
        }), _ember['default'].Object.create({
            town: 'Broxburn',
            name: null,
            address: '11 Youngs Road East, Mains Indusrial Estate, Broxburn',
            postcode: 'EH52 5LY',
            telephone: '0150 686 2780',
            location: {
                lat: 55.9414254,
                lng: -3.4551249
            }
        }), _ember['default'].Object.create({
            town: 'Aberdeen',
            name: null,
            address: 'Denmore Road, Bridge of Don, Aberdeen',
            postcode: 'AB23 8JW',
            telephone: '0122 482 4300',
            location: {
                lat: 57.1962574,
                lng: -2.0961151
            }
        }), _ember['default'].Object.create({
            town: 'Glasgow',
            name: null,
            address: '220 Great Western Road, Glasgow',
            postcode: 'G4 9EJ',
            telephone: '0141 404 7744',
            location: {
                lat: 55.8725868,
                lng: -4.2747069
            }
        }), _ember['default'].Object.create({
            town: 'Tillicoultry',
            name: null,
            address: '76 Moss Road, Tillicoultry',
            postcode: 'FK13 6NS',
            telephone: '0125 923 7010',
            location: {
                lat: 56.1489967,
                lng: -3.7396832
            }
        })]
    });
});
define('kitchens-international/tests/controllers/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('kitchens-international/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.eq = eq;

  function eq(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('kitchens-international/tests/helpers/eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'kitchens-international/tests/helpers/start-app', 'kitchens-international/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _kitchensInternationalTestsHelpersStartApp, _kitchensInternationalTestsHelpersDestroyApp) {
  'use strict';

  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _kitchensInternationalTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _kitchensInternationalTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('kitchens-international/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/resolver', ['exports', 'kitchens-international/resolver', 'kitchens-international/config/environment'], function (exports, _kitchensInternationalResolver, _kitchensInternationalConfigEnvironment) {
  'use strict';

  var resolver = _kitchensInternationalResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _kitchensInternationalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kitchensInternationalConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('kitchens-international/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/start-app', ['exports', 'ember', 'kitchens-international/app', 'kitchens-international/config/environment'], function (exports, _ember, _kitchensInternationalApp, _kitchensInternationalConfigEnvironment) {
  'use strict';

  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _kitchensInternationalConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _kitchensInternationalApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('kitchens-international/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/header-nav-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('header-nav', 'Integration | Component | header nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'header-nav', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'header-nav', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/header-nav-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/header-nav-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-nav-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/store-locations-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('store-locations', 'Integration | Component | store locations', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'store-locations', ['loc', [null, [1, 0], [1, 19]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'store-locations', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/store-locations-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/store-locations-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/store-locations-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  exports['default'] = _emberResolver['default'];
});
define('kitchens-international/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('kitchens-international/tests/router', ['exports', 'ember', 'kitchens-international/tests/config/environment'], function (exports, _ember, _kitchensInternationalTestsConfigEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: _kitchensInternationalTestsConfigEnvironment['default'].locationType,
    rootURL: _kitchensInternationalTestsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
  });

  exports['default'] = Router;
});
define('kitchens-international/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/home', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Route.extend({});
});
define('kitchens-international/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('kitchens-international/tests/services/google-map', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('kitchens-international/tests/services/google-map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/google-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/google-map.js should pass jshint.\nservices/google-map.js: line 22, col 23, \'google\' is not defined.\nservices/google-map.js: line 124, col 26, \'google\' is not defined.\n\n2 errors');
  });
});
define('kitchens-international/tests/styles/_bootstrap.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/_bootstrap.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_bootstrap.scss should pass sass-lint\n\n');
  });
});
define('kitchens-international/tests/styles/_custom.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/_custom.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_custom.scss should pass sass-lint\n\n48:8 - @warn not allowed (no-warn)\n48:13 - Strings must use single quotes (quotes)\n50:8 - @warn not allowed (no-warn)\n50:13 - Strings must use single quotes (quotes)\n63:51 - Strings must use single quotes (quotes)\n77:6 - @warn not allowed (no-warn)\n77:11 - Strings must use single quotes (quotes)\n105:29 - Hex values should use the shorthand format - 3 characters where possible (hex-length)\n211:47 - Strings must use single quotes (quotes)\n225:51 - Strings must use single quotes (quotes)\n247:35 - Strings must use single quotes (quotes)\n248:51 - Strings must use single quotes (quotes)\n248:70 - Strings must use single quotes (quotes)\n307:54 - Commas should be followed by a space (space-after-comma)\n346:44 - Commas should be followed by a space (space-after-comma)\n347:44 - Commas should be followed by a space (space-after-comma)\n365:59 - Commas should be followed by a space (space-after-comma)\n365:87 - Commas should be followed by a space (space-after-comma)\n367:61 - Commas should be followed by a space (space-after-comma)\n422:45 - Commas should be followed by a space (space-after-comma)\n424:61 - Commas should be followed by a space (space-after-comma)\n474:72 - Commas should be followed by a space (space-after-comma)\n491:48 - Strings must use single quotes (quotes)\n491:282 - Strings must use single quotes (quotes)\n491:287 - Strings must use single quotes (quotes)\n495:54 - Strings must use single quotes (quotes)\n495:244 - Strings must use single quotes (quotes)\n495:249 - Strings must use single quotes (quotes)\n499:45 - Strings must use single quotes (quotes)\n499:225 - Strings must use single quotes (quotes)\n499:230 - Strings must use single quotes (quotes)\n511:47 - Strings must use single quotes (quotes)\n511:235 - Strings must use single quotes (quotes)\n511:240 - Strings must use single quotes (quotes)\n534:60 - Commas should be followed by a space (space-after-comma)\n539:9 - Strings must use single quotes (quotes)\n542:9 - Strings must use single quotes (quotes)\n549:37 - Strings must use single quotes (quotes)\n549:300 - Strings must use single quotes (quotes)\n549:305 - Strings must use single quotes (quotes)\n552:37 - Strings must use single quotes (quotes)\n552:373 - Strings must use single quotes (quotes)\n552:378 - Strings must use single quotes (quotes)\n555:36 - Strings must use single quotes (quotes)\n555:340 - Strings must use single quotes (quotes)\n555:345 - Strings must use single quotes (quotes)\n566:45 - Commas should be followed by a space (space-after-comma)\n569:58 - Commas should be followed by a space (space-after-comma)\n614:51 - Commas should be followed by a space (space-after-comma)\n615:51 - Commas should be followed by a space (space-after-comma)\n616:51 - Commas should be followed by a space (space-after-comma)\n617:51 - Commas should be followed by a space (space-after-comma)\n618:45 - Strings must use single quotes (quotes)\n618:292 - Strings must use single quotes (quotes)\n618:297 - Strings must use single quotes (quotes)\n619:51 - Commas should be followed by a space (space-after-comma)\n621:48 - Commas should be followed by a space (space-after-comma)\n622:48 - Commas should be followed by a space (space-after-comma)\n623:48 - Commas should be followed by a space (space-after-comma)\n624:48 - Commas should be followed by a space (space-after-comma)\n625:43 - Strings must use single quotes (quotes)\n625:288 - Strings must use single quotes (quotes)\n625:293 - Strings must use single quotes (quotes)\n626:48 - Commas should be followed by a space (space-after-comma)\n749:50 - Commas should be followed by a space (space-after-comma)\n750:61 - Commas should be followed by a space (space-after-comma)\n799:45 - Commas should be followed by a space (space-after-comma)\n801:55 - Commas should be followed by a space (space-after-comma)\n802:56 - Commas should be followed by a space (space-after-comma)\n853:64 - Commas should be followed by a space (space-after-comma)\n862:45 - Commas should be followed by a space (space-after-comma)\n894:52 - Commas should be followed by a space (space-after-comma)\n913:33 - Strings must use single quotes (quotes)\n932:49 - Strings must use single quotes (quotes)\n932:254 - Strings must use single quotes (quotes)\n932:259 - Strings must use single quotes (quotes)\n933:49 - Strings must use single quotes (quotes)\n933:256 - Strings must use single quotes (quotes)\n933:261 - Strings must use single quotes (quotes)');
  });
});
define('kitchens-international/tests/styles/app.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/app.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/app.scss should pass sass-lint\n\n6:5 - Expected indentation of 2 space but found 4. (indentation)\n6:5 - Expected `background`, found `position` (property-sort-order)\n7:5 - Expected indentation of 2 space but found 4. (indentation)\n7:5 - Expected `left`, found `top` (property-sort-order)\n8:5 - Expected indentation of 2 space but found 4. (indentation)\n8:5 - Expected `padding`, found `left` (property-sort-order)\n9:5 - Expected indentation of 2 space but found 4. (indentation)\n9:5 - Expected `position`, found `width` (property-sort-order)\n10:5 - Expected `text-align`, found `padding` (property-sort-order)\n10:5 - Expected indentation of 2 space but found 4. (indentation)\n11:5 - Expected `top`, found `text-align` (property-sort-order)\n11:5 - Expected indentation of 2 space but found 4. (indentation)\n12:5 - Expected indentation of 2 space but found 4. (indentation)\n12:5 - Expected `width`, found `z-index` (property-sort-order)\n13:5 - Expected `z-index`, found `background` (property-sort-order)\n13:5 - Expected indentation of 2 space but found 4. (indentation)\n13:17 - Color functions such as \'rgba\' should only be used in variable declarations (no-color-literals)\n15:5 - Expected indentation of 2 space but found 4. (indentation)\n16:9 - Expected indentation of 4 spaces but found 8. (indentation)\n16:9 - Expected `background`, found `position` (property-sort-order)\n17:9 - Expected `font-size`, found `background` (property-sort-order)\n17:9 - Expected indentation of 4 spaces but found 8. (indentation)\n18:9 - Expected `height`, found `top` (property-sort-order)\n18:9 - Expected indentation of 4 spaces but found 8. (indentation)\n19:9 - Expected `max-width`, found `right` (property-sort-order)\n19:9 - Expected indentation of 4 spaces but found 8. (indentation)\n20:9 - Expected `padding-top`, found `width` (property-sort-order)\n20:9 - Expected indentation of 4 spaces but found 8. (indentation)\n21:9 - Expected indentation of 4 spaces but found 8. (indentation)\n21:9 - Expected `position`, found `max-width` (property-sort-order)\n22:9 - Expected `right`, found `height` (property-sort-order)\n22:9 - Expected indentation of 4 spaces but found 8. (indentation)\n23:9 - Expected `text-align`, found `z-index` (property-sort-order)\n23:9 - Expected indentation of 4 spaces but found 8. (indentation)\n24:9 - Expected `text-transform`, found `text-align` (property-sort-order)\n24:9 - Expected indentation of 4 spaces but found 8. (indentation)\n25:9 - Expected `top`, found `text-transform` (property-sort-order)\n25:9 - Expected indentation of 4 spaces but found 8. (indentation)\n26:9 - Expected indentation of 4 spaces but found 8. (indentation)\n26:9 - Expected `width`, found `font-size` (property-sort-order)\n27:9 - Expected indentation of 4 spaces but found 8. (indentation)\n27:9 - Expected `z-index`, found `padding-top` (property-sort-order)\n29:9 - Expected indentation of 4 spaces but found 8. (indentation)\n30:13 - Expected indentation of 6 spaces but found 12. (indentation)\n31:17 - Expected `max-width`, found `width` (property-sort-order)\n31:17 - Expected indentation of 8 spaces but found 16. (indentation)\n32:17 - Expected indentation of 8 spaces but found 16. (indentation)\n32:17 - Expected `width`, found `max-width` (property-sort-order)\n36:9 - Expected indentation of 4 spaces but found 8. (indentation)\n37:13 - Expected `display`, found `margin` (property-sort-order)\n37:13 - Expected indentation of 6 spaces but found 12. (indentation)\n38:13 - Expected indentation of 6 spaces but found 12. (indentation)\n39:13 - Expected `margin`, found `padding-left` (property-sort-order)\n39:13 - Expected indentation of 6 spaces but found 12. (indentation)\n40:13 - Expected indentation of 6 spaces but found 12. (indentation)\n40:13 - Expected `padding-left`, found `display` (property-sort-order)\n42:13 - Expected indentation of 6 spaces but found 12. (indentation)\n42:13 - Nesting depth 3 greater than max of 2 (nesting-depth)\n43:17 - Expected indentation of 8 spaces but found 16. (indentation)\n46:13 - Nesting depth 3 greater than max of 2 (nesting-depth)\n46:13 - Expected indentation of 6 spaces but found 12. (indentation)\n47:17 - Expected indentation of 8 spaces but found 16. (indentation)\n52:5 - Expected indentation of 2 space but found 4. (indentation)\n53:9 - Expected indentation of 4 spaces but found 8. (indentation)\n54:9 - Expected indentation of 4 spaces but found 8. (indentation)\n55:9 - Expected indentation of 4 spaces but found 8. (indentation)\n58:5 - Expected indentation of 2 space but found 4. (indentation)\n59:9 - Expected indentation of 4 spaces but found 8. (indentation)\n59:9 - Expected `float`, found `width` (property-sort-order)\n60:9 - Expected indentation of 4 spaces but found 8. (indentation)\n60:9 - Expected `position`, found `float` (property-sort-order)\n61:9 - Expected `width`, found `position` (property-sort-order)\n61:9 - Expected indentation of 4 spaces but found 8. (indentation)\n63:9 - Expected indentation of 4 spaces but found 8. (indentation)\n64:13 - Expected `display`, found `z-index` (property-sort-order)\n64:13 - Expected indentation of 6 spaces but found 12. (indentation)\n65:13 - Expected `z-index`, found `display` (property-sort-order)\n65:13 - Expected indentation of 6 spaces but found 12. (indentation)\n71:5 - Expected indentation of 2 space but found 4. (indentation)\n73:5 - Expected indentation of 2 space but found 4. (indentation)\n74:9 - Expected indentation of 4 spaces but found 8. (indentation)\n75:9 - Expected indentation of 4 spaces but found 8. (indentation)\n78:5 - Expected indentation of 2 space but found 4. (indentation)\n79:9 - Expected indentation of 4 spaces but found 8. (indentation)\n84:5 - Expected indentation of 2 space but found 4. (indentation)\n89:5 - Expected indentation of 2 space but found 4. (indentation)\n89:13 - Selectors must be placed on new lines (single-line-per-selector)\n90:5 - Expected indentation of 2 space but found 4. (indentation)\n94:5 - Expected indentation of 2 space but found 4. (indentation)\n98:5 - Expected `line-height`, found `vertical-align` (property-sort-order)\n98:5 - Expected indentation of 2 space but found 4. (indentation)\n99:5 - Expected indentation of 2 space but found 4. (indentation)\n99:5 - Expected `vertical-align`, found `line-height` (property-sort-order)\n103:5 - Expected indentation of 2 space but found 4. (indentation)\n103:5 - Vendor prefixes should not be used (no-vendor-prefixes)\n104:5 - Expected indentation of 2 space but found 4. (indentation)\n108:5 - Expected indentation of 2 space but found 4. (indentation)\n110:5 - Expected indentation of 2 space but found 4. (indentation)\n111:9 - Expected indentation of 4 spaces but found 8. (indentation)\n117:5 - Expected indentation of 2 space but found 4. (indentation)\n118:9 - Expected indentation of 4 spaces but found 8. (indentation)\n124:5 - Expected indentation of 2 space but found 4. (indentation)\n125:5 - Expected indentation of 2 space but found 4. (indentation)\n127:5 - Expected indentation of 2 space but found 4. (indentation)\n128:9 - Expected indentation of 4 spaces but found 8. (indentation)\n131:5 - Expected indentation of 2 space but found 4. (indentation)\n132:9 - Expected indentation of 4 spaces but found 8. (indentation)\n135:5 - Expected indentation of 2 space but found 4. (indentation)\n136:9 - Expected indentation of 4 spaces but found 8. (indentation)\n142:5 - Expected indentation of 2 space but found 4. (indentation)\n143:9 - Expected indentation of 4 spaces but found 8. (indentation)\n148:5 - Expected `background-color`, found `height` (property-sort-order)\n148:5 - Expected indentation of 2 space but found 4. (indentation)\n149:5 - Expected indentation of 2 space but found 4. (indentation)\n149:5 - Expected `border-bottom-width`, found `overflow` (property-sort-order)\n150:5 - Expected indentation of 2 space but found 4. (indentation)\n150:5 - Expected `border-color`, found `border-width` (property-sort-order)\n151:5 - Expected indentation of 2 space but found 4. (indentation)\n152:5 - Expected indentation of 2 space but found 4. (indentation)\n152:5 - Expected `border-width`, found `border-color` (property-sort-order)\n153:5 - Expected `height`, found `border-bottom-width` (property-sort-order)\n153:5 - Expected indentation of 2 space but found 4. (indentation)\n153:31 - No space allowed at beginning of parenthesis (space-between-parens)\n153:52 - No space allowed at end of parenthesis (space-between-parens)\n154:5 - Expected indentation of 2 space but found 4. (indentation)\n154:5 - Expected `overflow`, found `background-color` (property-sort-order)\n155:5 - Expected indentation of 2 space but found 4. (indentation)\n157:5 - Expected indentation of 2 space but found 4. (indentation)\n158:9 - Expected `background-color`, found `display` (property-sort-order)\n158:9 - Expected indentation of 4 spaces but found 8. (indentation)\n159:9 - Expected `display`, found `background-color` (property-sort-order)\n159:9 - Expected indentation of 4 spaces but found 8. (indentation)\n160:9 - Expected indentation of 4 spaces but found 8. (indentation)\n161:9 - Expected indentation of 4 spaces but found 8. (indentation)\n166:5 - Expected `left`, found `position` (property-sort-order)\n166:5 - Expected indentation of 2 space but found 4. (indentation)\n167:5 - Expected `min-height`, found `top` (property-sort-order)\n167:5 - Expected indentation of 2 space but found 4. (indentation)\n167:10 - No unit allowed for values of 0 (zero-unit)\n168:5 - Expected `min-width`, found `left` (property-sort-order)\n168:5 - Expected indentation of 2 space but found 4. (indentation)\n168:11 - No unit allowed for values of 0 (zero-unit)\n169:5 - Expected `position`, found `min-width` (property-sort-order)\n169:5 - Expected indentation of 2 space but found 4. (indentation)\n170:5 - Expected `top`, found `min-height` (property-sort-order)\n170:5 - Expected indentation of 2 space but found 4. (indentation)\n174:5 - Expected indentation of 2 space but found 4. (indentation)\n175:9 - Expected indentation of 4 spaces but found 8. (indentation)\n175:16 - Color literals such as \'#fff\' should only be used in variable declarations (no-color-literals)\n177:9 - Expected indentation of 4 spaces but found 8. (indentation)\n178:13 - Expected indentation of 6 spaces but found 12. (indentation)\n187:5 - Expected indentation of 2 space but found 4. (indentation)\n188:9 - Expected indentation of 4 spaces but found 8. (indentation)\n190:9 - Expected indentation of 4 spaces but found 8. (indentation)\n191:13 - Expected indentation of 6 spaces but found 12. (indentation)\n192:13 - Expected indentation of 6 spaces but found 12. (indentation)\n196:5 - Expected indentation of 2 space but found 4. (indentation)\n197:9 - Expected indentation of 4 spaces but found 8. (indentation)\n200:5 - Expected indentation of 2 space but found 4. (indentation)\n201:9 - Expected indentation of 4 spaces but found 8. (indentation)\n204:5 - Expected indentation of 2 space but found 4. (indentation)\n205:9 - Expected indentation of 4 spaces but found 8. (indentation)\n205:9 - Expected `background-color`, found `position` (property-sort-order)\n206:9 - Expected `height`, found `top` (property-sort-order)\n206:9 - Expected indentation of 4 spaces but found 8. (indentation)\n207:9 - Expected indentation of 4 spaces but found 8. (indentation)\n208:9 - Expected indentation of 4 spaces but found 8. (indentation)\n208:9 - Expected `position`, found `width` (property-sort-order)\n209:9 - Expected `top`, found `height` (property-sort-order)\n209:9 - Expected indentation of 4 spaces but found 8. (indentation)\n210:9 - Expected indentation of 4 spaces but found 8. (indentation)\n210:9 - Expected `width`, found `background-color` (property-sort-order)\n210:27 - Color functions such as \'rgba\' should only be used in variable declarations (no-color-literals)\n212:9 - Expected indentation of 4 spaces but found 8. (indentation)\n213:13 - Expected `bottom`, found `position` (property-sort-order)\n213:13 - Expected indentation of 6 spaces but found 12. (indentation)\n214:13 - Expected indentation of 6 spaces but found 12. (indentation)\n214:13 - Expected `left`, found `bottom` (property-sort-order)\n215:13 - Expected `position`, found `left` (property-sort-order)\n215:13 - Expected indentation of 6 spaces but found 12. (indentation)\n218:9 - Expected indentation of 4 spaces but found 8. (indentation)\n219:13 - Expected indentation of 6 spaces but found 12. (indentation)\n219:13 - Expected `bottom`, found `position` (property-sort-order)\n220:13 - Expected indentation of 6 spaces but found 12. (indentation)\n220:13 - Expected `position`, found `bottom` (property-sort-order)\n221:13 - Expected indentation of 6 spaces but found 12. (indentation)\n222:13 - Expected indentation of 6 spaces but found 12. (indentation)\n224:13 - Expected indentation of 6 spaces but found 12. (indentation)\n225:17 - Expected indentation of 8 spaces but found 16. (indentation)\n227:17 - Expected indentation of 8 spaces but found 16. (indentation)\n227:28 - Selectors must be placed on new lines (single-line-per-selector)\n227:38 - Selectors must be placed on new lines (single-line-per-selector)\n227:47 - Selectors must be placed on new lines (single-line-per-selector)\n228:21 - Expected indentation of 10 spaces but found 20. (indentation)\n240:5 - Expected indentation of 2 space but found 4. (indentation)\n242:9 - Expected indentation of 4 spaces but found 8. (indentation)\n243:13 - Expected indentation of 6 spaces but found 12. (indentation)\n247:5 - Expected indentation of 2 space but found 4. (indentation)\n248:9 - Expected indentation of 4 spaces but found 8. (indentation)\n248:25 - Quotes around URLs are required (url-quotes)\n249:9 - Expected indentation of 4 spaces but found 8. (indentation)\n250:9 - Expected `height`, found `width` (property-sort-order)\n250:9 - Expected indentation of 4 spaces but found 8. (indentation)\n251:9 - Expected indentation of 4 spaces but found 8. (indentation)\n252:9 - Expected `text-align`, found `height` (property-sort-order)\n252:9 - Duplicate properties are not allowed within a block (no-duplicate-properties)\n252:9 - Expected indentation of 4 spaces but found 8. (indentation)\n253:9 - Expected `width`, found `text-align` (property-sort-order)\n253:9 - Expected indentation of 4 spaces but found 8. (indentation)\n255:9 - Expected indentation of 4 spaces but found 8. (indentation)\n256:13 - Expected indentation of 6 spaces but found 12. (indentation)');
  });
});
define('kitchens-international/tests/test-helper', ['exports', 'kitchens-international/tests/helpers/resolver', 'ember-qunit'], function (exports, _kitchensInternationalTestsHelpersResolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_kitchensInternationalTestsHelpersResolver['default']);
});
define('kitchens-international/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('kitchens-international/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/controllers/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('kitchens-international/tests/unit/controllers/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/helpers/eq-test', ['exports', 'kitchens-international/helpers/eq', 'qunit'], function (exports, _kitchensInternationalHelpersEq, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _kitchensInternationalHelpersEq.eq)([42]);
    assert.ok(result);
  });
});
define('kitchens-international/tests/unit/helpers/eq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/eq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/eq-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/services/google-map-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:google-map', 'Unit | Service | google map', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('kitchens-international/tests/unit/services/google-map-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/google-map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/google-map-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('kitchens-international/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
