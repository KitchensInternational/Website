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

    var ANIMATION_DELAY = 800;
    var NAV_ANIMATION_SPEED = 600;

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
define('kitchens-international/tests/components/header-nav.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/header-nav.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-nav.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/image-carousel', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['carousel', 'slide'],
        attributeBindings: ['data-ride'],
        "data-ride": 'carousel',
        images: _ember['default'].A(),
        showControls: true,
        showIndicators: false
    });
});
define('kitchens-international/tests/components/image-carousel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/image-carousel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/image-carousel.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/slide-in-wrapper', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
                        componentOffset = component.$().offset().top,
                        scrollTop = windowElement.scrollTop(),
                        windowHeight = windowElement.scrollTop(),
                        fold = scrollTop + windowHeight - LEADING_EDGE_ALLOWANCE;
                    component.set('belowTheFold', componentOffset > fold);
                });
            });
        }
    });
});
define('kitchens-international/tests/components/slide-in-wrapper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/slide-in-wrapper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/slide-in-wrapper.js should pass jshint.');
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
        images: [_ember['default'].Object.create({
            url: '/assets/images/ki-home-0001.jpg',
            title: ''
        }), _ember['default'].Object.create({
            url: '/assets/images/ki-home-0002.jpg',
            title: ''
        }), _ember['default'].Object.create({
            url: '/assets/images/ki-home-0003.jpg',
            title: ''
        })],
        stores: [_ember['default'].Object.create({
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
define('kitchens-international/tests/integration/components/slide-in-wrapper-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('slide-in-wrapper', 'Integration | Component | slide in wrapper', {
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
              'column': 20
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
        statements: [['content', 'slide-in-wrapper', ['loc', [null, [1, 0], [1, 20]]], 0, 0, 0, 0]],
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
        statements: [['block', 'slide-in-wrapper', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/slide-in-wrapper-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/slide-in-wrapper-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/slide-in-wrapper-test.js should pass jshint.');
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
    assert.ok(true, 'services/google-map.js should pass jshint.');
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
    assert.ok(true, 'styles/_custom.scss should pass sass-lint\n\n');
  });
});
define('kitchens-international/tests/styles/app.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/app.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/app.scss should pass sass-lint\n\n');
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
