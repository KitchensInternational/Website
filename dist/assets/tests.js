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
define('kitchens-international/tests/components/back-to-top', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['clickable'],
        click: function click() {
            _ember['default'].$(window).scrollTop(0);
        }
    });
});
define('kitchens-international/tests/components/back-to-top.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/back-to-top.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/back-to-top.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/blog-control', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        tagName: 'nav',
        classNames: ['blog-control']
    });
});
define('kitchens-international/tests/components/blog-control.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/blog-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blog-control.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/contact-form-button', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        tagName: 'button',
        classNames: ['btn'],
        classNameBindings: ['white-text:btn-outline-secondary:btn-outline-primary'],
        attributeBindings: ['data-toggle', 'data-target'],
        'white-text': true,
        'data-toggle': 'modal',
        'data-target': _ember['default'].computed('contact-form', function () {
            return '#' + this.get('form-id');
        }),
        'form-id': 'contact-form'
    });
});
define('kitchens-international/tests/components/contact-form-button.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/contact-form-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-form-button.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/contact-form-modal', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['contact-form', 'modal', 'fade'],
        attributeBindings: ['tabindex', 'role', 'aria-hidden'],
        tabindex: '-1',
        role: 'dialog',
        'aria-hidden': 'true',
        'request-brochure': false
    });
});
define('kitchens-international/tests/components/contact-form-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/contact-form-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-form-modal.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/contact-form', ['exports', 'ember', 'ember-form-validation/mixins/form-validation'], function (exports, _ember, _emberFormValidationMixinsFormValidation) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend(_emberFormValidationMixinsFormValidation['default'], {
        classNames: ['container-fluid', 'contact-form-inner'],
        'request-brochure': false,
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        selectedKitchen: '',
        validationDanger: false,
        validate: {
            form: {
                name: {
                    required: true,
                    format: 'fullname',
                    message: 'Please enter your full name'
                },
                email: {
                    required: true,
                    format: 'email',
                    message: 'Please enter a valid email address'
                },
                phone: {
                    required: true,
                    message: 'Please enter a your phone number'
                }
            }
        },
        isValid: _ember['default'].computed('validationErrorExists', function () {
            return !this.get('validationErrorExists');
        }),
        actions: {
            triggerValidation: function triggerValidation() {
                var form = {
                    name: this.get('name'),
                    email: this.get('email'),
                    phone: this.get('phone'),
                    address: this.get('address'),
                    message: this.get('message'),
                    kitchen: this.get('selectedKitchen')
                };
                this.send('validate_form_action', form);
                this.set('validationDanger', false);
            },
            triggerSubmit: function triggerSubmit() {
                this.send('triggerValidation');
                this.set('validationDanger', true);
                if (this.get('isValid')) {
                    alert('WHEN FINISHED THIS WILL SEND THE FORM');
                }
            }
        }
    });
});
define('kitchens-international/tests/components/contact-form.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/contact-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-form.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/header-nav', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('kitchens-international/tests/components/header-nav.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/header-nav.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-nav.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/heading-after-scroll', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    var LEADING_EDGE_ALLOWANCE = 100;

    exports['default'] = _ember['default'].Component.extend({
        tagName: 'h1',
        classNames: ['move-to-heading-after-scroll'],
        didInsertElement: function didInsertElement() {
            _ember['default'].$('header').first().prepend('<span class="display-4 after-scroll-heading text-white hidden-sm-down hidden">remove me please</span>');
            _ember['default'].run.once(this, function () {
                var componentElement = this.$(),
                    headingPositionTop = componentElement.offset().top;
                _ember['default'].$(window).on('scroll', function () {
                    var windowScrollTop = _ember['default'].$(this).scrollTop(),
                        afterScrollHeading = _ember['default'].$('.after-scroll-heading').first();
                    if (headingPositionTop < windowScrollTop - LEADING_EDGE_ALLOWANCE) {
                        // display heading
                        if (afterScrollHeading.hasClass('hidden')) {
                            afterScrollHeading.text(componentElement.text()).removeClass('hidden').addClass('visible');
                        }
                    } else {
                        // hide heading
                        if (afterScrollHeading.hasClass('visible')) {
                            afterScrollHeading.removeClass('visible').addClass('hidden').text();
                        }
                    }
                });
            });
        },
        willDestroyElement: function willDestroyElement() {
            _ember['default'].$('.after-scroll-heading').removeClass('visible').addClass('hidden').text();
            _ember['default'].$(window).off('scroll');
        }
    });
});
define('kitchens-international/tests/components/heading-after-scroll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/heading-after-scroll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/heading-after-scroll.js should pass jshint.');
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
define('kitchens-international/tests/components/pagination-control', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('kitchens-international/tests/components/pagination-control.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/pagination-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pagination-control.js should pass jshint.');
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
define('kitchens-international/tests/components/slide-in-wrapper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/slide-in-wrapper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/slide-in-wrapper.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/social-icons', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        tagName: 'p',
        greyIcons: false
    });
});
define('kitchens-international/tests/components/social-icons.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/social-icons.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/social-icons.js should pass jshint.');
  });
});
define('kitchens-international/tests/components/store-locations', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['store-locations'],
        googleMapService: _ember['default'].inject.service('google-map'),
        _center: { lat: 55.9396122, lng: -3.2431527 },
        _zoom: 14,
        _map: null,
        _marker: null,
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
            this.set('_center', this.get('activeStore.location'));
        }),
        updateMapOnCenterChange: _ember['default'].observer('_center', function () {
            this.get('_map').setCenter(this.get('_center'));
            this.get('googleMapService').removeMarker(this.get('_marker'));
            this.get('googleMapService').addMarker(this.get('_map'), this.get('_center'));
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
        routing: _ember['default'].inject.service('-routing'),
        activeStore: null,
        stores: _ember['default'].computed(function () {
            return this.get('store').query('store', { order: 'fields.town' });
        })
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
define('kitchens-international/tests/controllers/endorsements', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        sortedEndorsementsOrder: ['order'],
        sortedEndorsements: _ember['default'].computed.sort('model.endorsements', 'sortedEndorsementsOrder')
    });
});
define('kitchens-international/tests/controllers/endorsements.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/endorsements.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/endorsements.js should pass jshint.');
  });
});
define('kitchens-international/tests/controllers/home', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        leadArticle: _ember['default'].computed.alias('model.stories.firstObject')
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
define('kitchens-international/tests/controllers/kitchen', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        kitchens: _ember['default'].computed(function () {
            return this.get('store').findAll('kitchen');
        })
    });
});
define('kitchens-international/tests/controllers/kitchen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/kitchen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/kitchen.js should pass jshint.');
  });
});
define('kitchens-international/tests/helpers/background-image', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports.backgroundImage = backgroundImage;

    function backgroundImage(params /*, hash*/) {
        return _ember['default'].String.htmlSafe('background-image: url(' + params[0] + ')');
    }

    exports['default'] = _ember['default'].Helper.helper(backgroundImage);
});
define('kitchens-international/tests/helpers/background-image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/background-image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/background-image.js should pass jshint.');
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
define('kitchens-international/tests/helpers/escape', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports.escape = escape;

    function escape(params) {
        return _ember['default'].String.htmlSafe(params.join(''));
    }

    exports['default'] = _ember['default'].Helper.helper(escape);
});
define('kitchens-international/tests/helpers/escape.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/escape.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/escape.js should pass jshint.');
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
define('kitchens-international/tests/helpers/odd', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports.odd = odd;

    function odd(params) {
        return params[0] % 2;
    }

    exports['default'] = _ember['default'].Helper.helper(odd);
});
define('kitchens-international/tests/helpers/odd.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/odd.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/odd.js should pass jshint.');
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
define('kitchens-international/tests/helpers/validation', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports.validation = validation;

    function group(value, error, danger) {
        if (error) {
            return danger ? 'has-danger' : 'has-warning';
        }
        if (value.length > 1) {
            return 'has-success';
        }
        return '';
    }

    function control(value, error, danger) {
        var className = '';
        if (error) {
            className = danger ? 'form-control-danger' : 'form-control-warning';
        }
        if (value.length > 1) {
            className = 'form-control-success';
        }
        return 'form-control ' + className;
    }

    function validation(params) {
        var type = params[0],
            value = params[1],
            error = params[2],
            danger = params[3];

        switch (type) {
            case 'form-group':
                return group(value, error, danger);
            case 'form-control':
                return control(value, error, danger);
        }
    }

    exports['default'] = _ember['default'].Helper.helper(validation);
});
define('kitchens-international/tests/helpers/validation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/validation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/validation.js should pass jshint.\nhelpers/validation.js: line 8, col 29, Missing semicolon.\n\n1 error');
  });
});
define('kitchens-international/tests/initializers/reopen-route', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

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
define('kitchens-international/tests/initializers/reopen-route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/reopen-route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/reopen-route.js should pass jshint.');
  });
});
define('kitchens-international/tests/initializers/reopen-router', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('kitchens-international/tests/initializers/reopen-router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/reopen-router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/reopen-router.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/back-to-top-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('back-to-top', 'Integration | Component | back to top', {
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
              'column': 15
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
        statements: [['content', 'back-to-top', ['loc', [null, [1, 0], [1, 15]]], 0, 0, 0, 0]],
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
        statements: [['block', 'back-to-top', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/back-to-top-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/back-to-top-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/back-to-top-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/blog-control-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('blog-control', 'Integration | Component | blog control', {
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
              'column': 16
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
        statements: [['content', 'blog-control', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
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
        statements: [['block', 'blog-control', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/blog-control-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/blog-control-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blog-control-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/contact-form-button-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('contact-form-button', 'Integration | Component | contact form button', {
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
              'column': 23
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
        statements: [['content', 'contact-form-button', ['loc', [null, [1, 0], [1, 23]]], 0, 0, 0, 0]],
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
        statements: [['block', 'contact-form-button', [], [], 0, null, ['loc', [null, [2, 4], [4, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/contact-form-button-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/contact-form-button-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-form-button-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/integration/components/contact-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('contact-form', 'Integration | Component | contact form', {
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
              'column': 16
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
        statements: [['content', 'contact-form', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
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
        statements: [['block', 'contact-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/contact-form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/contact-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-form-test.js should pass jshint.');
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
define('kitchens-international/tests/integration/components/heading-after-scroll-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('heading-after-scroll', 'Integration | Component | heading after scroll', {
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
              'column': 24
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
        statements: [['content', 'heading-after-scroll', ['loc', [null, [1, 0], [1, 24]]], 0, 0, 0, 0]],
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
        statements: [['block', 'heading-after-scroll', [], [], 0, null, ['loc', [null, [2, 4], [4, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/heading-after-scroll-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/heading-after-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/heading-after-scroll-test.js should pass jshint.');
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
define('kitchens-international/tests/integration/components/social-icons-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('social-icons', 'Integration | Component | social icons', {
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
              'column': 16
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
        statements: [['content', 'social-icons', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
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
        statements: [['block', 'social-icons', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('kitchens-international/tests/integration/components/social-icons-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/social-icons-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/social-icons-test.js should pass jshint.');
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
define('kitchens-international/tests/models/article', ['exports', 'ember', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _ember, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

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
define('kitchens-international/tests/models/article.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/article.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/article.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/endorsement', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        order: (0, _emberDataAttr['default'])('number'),
        featuredImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        contentArea1: (0, _emberDataAttr['default'])('string'),
        contentArea2: (0, _emberDataAttr['default'])('string'),
        contentArea3: (0, _emberDataAttr['default'])('string'),
        contentArea4: (0, _emberDataAttr['default'])('string')
    });
});
define('kitchens-international/tests/models/endorsement.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/endorsement.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/endorsement.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/home-page', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

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
define('kitchens-international/tests/models/home-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/home-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/home-page.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/kitchen', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        featuredImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        excerpt: (0, _emberDataAttr['default'])('string'),
        introduction: (0, _emberDataAttr['default'])('string'),
        images: (0, _emberDataRelationships.hasMany)('contentful-asset'),
        brochure: (0, _emberDataRelationships.belongsTo)('contentful-asset')
    });
});
define('kitchens-international/tests/models/kitchen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/kitchen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/kitchen.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/page', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        town: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        heading: (0, _emberDataAttr['default'])('string'),
        introduction: (0, _emberDataAttr['default'])('string')
    });
});
define('kitchens-international/tests/models/page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/page.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/project', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        location: (0, _emberDataAttr['default'])('string'),
        featuredImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        images: (0, _emberDataRelationships.hasMany)('contentful-asset'),
        brief: (0, _emberDataAttr['default'])('string'),
        consultation: (0, _emberDataAttr['default'])('string'),
        design: (0, _emberDataAttr['default'])('string'),
        install: (0, _emberDataAttr['default'])('string'),
        signOff: (0, _emberDataAttr['default'])('string'),
        commercialProject: (0, _emberDataAttr['default'])('boolean')
    });
});
define('kitchens-international/tests/models/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/project.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/service', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        heading: (0, _emberDataAttr['default'])('string'),
        introduction: (0, _emberDataAttr['default'])('string'),
        role: (0, _emberDataAttr['default'])('string'),
        quote: (0, _emberDataAttr['default'])('string'),
        image: (0, _emberDataRelationships.belongsTo)('contentful-asset')
    });
});
define('kitchens-international/tests/models/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/service.js should pass jshint.');
  });
});
define('kitchens-international/tests/models/store', ['exports', 'ember-data-contentful/models/contentful', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataContentfulModelsContentful, _emberDataAttr, _emberDataRelationships) {
    'use strict';

    exports['default'] = _emberDataContentfulModelsContentful['default'].extend({
        town: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        address: (0, _emberDataAttr['default'])('string'),
        telephone: (0, _emberDataAttr['default'])('string'),
        openingHours: (0, _emberDataAttr['default'])('string'),
        location: (0, _emberDataAttr['default'])('json'),
        description: (0, _emberDataAttr['default'])('string'),
        featuredImage: (0, _emberDataRelationships.belongsTo)('contentful-asset'),
        images: (0, _emberDataRelationships.hasMany)('contentful-asset')
    });
});
define('kitchens-international/tests/models/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/store.js should pass jshint.');
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
    this.route('stories');
    this.route('story', { path: 'stories/:slug' });
    this.route('design-service');
    this.route('store', { path: 'store/:slug' });
    this.route('projects', { path: 'projects' });
    this.route('project', { path: 'projects/:slug' });
    this.route('kitchens', { path: 'kitchens' });
    this.route('kitchen', { path: 'kitchens/:slug' });
    this.route('commercials', { path: 'commercial' });
    this.route('commercial', { path: 'commercial/:slug' });
    this.route('endorsements');
    this.route('events');
    this.route('event', { path: 'events/:slug' });
    this.route('contact');
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
define('kitchens-international/tests/routes/commercial', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        templateName: 'project',
        model: function model(params) {
            return this.get('store').queryRecord('project', { 'fields.slug': params.slug });
        }
    });
});
define('kitchens-international/tests/routes/commercial.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/commercial.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/commercial.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/commercials', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'commercial' }),
                projects: this.get('store').query('project', { 'fields.commercialProject': true })
            });
        }
    });
});
define('kitchens-international/tests/routes/commercials.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/commercials.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/commercials.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/contact', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'contact' }),
                stores: this.get('store').peekAll('store')
            });
        }
    });
});
define('kitchens-international/tests/routes/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/design-service', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'design-service' }),
                services: this.get('store').findAll('service')
            });
        }
    });
});
define('kitchens-international/tests/routes/design-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/design-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/design-service.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/endorsements', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'endorsements' }),
                endorsements: this.get('store').findAll('endorsement')
            });
        }
    });
});
define('kitchens-international/tests/routes/endorsements.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/endorsements.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/endorsements.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/home', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('homePage', { 'fields.slug': 'home' }),
                stories: this.get('store').query('article', { limit: 1 })
            });
        }
    });
});
define('kitchens-international/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/kitchen', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').queryRecord('kitchen', { 'fields.slug': params.slug });
        }
    });
});
define('kitchens-international/tests/routes/kitchen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/kitchen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/kitchen.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/kitchens', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'kitchens' }),
                kitchens: this.get('store').findAll('kitchen')
            });
        }
    });
});
define('kitchens-international/tests/routes/kitchens.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/kitchens.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/kitchens.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/project', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').queryRecord('project', { 'fields.slug': params.slug });
        }
    });
});
define('kitchens-international/tests/routes/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/project.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/projects', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                content: this.get('store').queryRecord('page', { 'fields.slug': 'projects' }),
                projects: this.get('store').query('project', { 'fields.commercialProject': false })
            });
        }
    });
});
define('kitchens-international/tests/routes/projects.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/projects.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/store', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('kitchens-international/tests/routes/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/store.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/stories', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.get('store').query('article', { limit: 10 });
        }
    });
});
define('kitchens-international/tests/routes/stories.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/stories.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stories.js should pass jshint.');
  });
});
define('kitchens-international/tests/routes/story', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').queryRecord('article', { 'fields.slug': params.slug });
        }
    });
});
define('kitchens-international/tests/routes/story.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/story.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/story.js should pass jshint.');
  });
});
define('kitchens-international/tests/serializers/application', ['exports', 'ember-data-contentful/serializers/contentful'], function (exports, _emberDataContentfulSerializersContentful) {
    'use strict';

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
                var entries = [],
                    assets = [];

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
define('kitchens-international/tests/serializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
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
                draggable: true,
                zoomControl: true,
                streetViewControl: true,
                scrollwheel: false,
                disableDoubleClickZoom: false,
                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "saturation": "-100"
                    }, {
                        "lightness": "30"
                    }]
                }, {
                    "featureType": "administrative.neighborhood",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.land_parcel",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "gamma": "0.00"
                    }, {
                        "lightness": "74"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "all",
                    "stylers": [{
                        "lightness": "3"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            });
            if (typeof callback !== 'undefined') {
                map.addListener('center_changed', callback);
                map.addListener('zoom_changed', callback);
            }
            targetObject.set(mapProperty, map);
            return map;
        },

        addMarker: function addMarker(map, location, callback) {
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
            if (typeof callback !== 'undefined') {
                marker.addListener('click', callback);
            }
            return marker;
        },

        removeMarker: function removeMarker(marker) {
            if (marker) {
                marker.setMap(null);
            }
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
define('kitchens-international/tests/transforms/json', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    exports['default'] = _emberData['default'].Transform.extend({
        deserialize: function deserialize(serialized) {
            return { lat: serialized.lat, lng: serialized.lon }; // google map format
        },

        serialize: function serialize(deserialized) {
            return { lat: deserialized.lat, lon: deserialized.lng }; // contentful format
        }
    });
});
define('kitchens-international/tests/transforms/json.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transforms/json.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/json.js should pass jshint.');
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
define('kitchens-international/tests/unit/controllers/endorsements-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:endorsements', 'Unit | Controller | endorsements', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('kitchens-international/tests/unit/controllers/endorsements-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/endorsements-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/endorsements-test.js should pass jshint.');
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
define('kitchens-international/tests/unit/controllers/kitchen-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:kitchen', 'Unit | Controller | kitchen', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('kitchens-international/tests/unit/controllers/kitchen-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/kitchen-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/kitchen-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/helpers/background-image-test', ['exports', 'kitchens-international/helpers/background-image', 'qunit'], function (exports, _kitchensInternationalHelpersBackgroundImage, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | background image');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _kitchensInternationalHelpersBackgroundImage.backgroundImage)([42]);
    assert.ok(result);
  });
});
define('kitchens-international/tests/unit/helpers/background-image-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/background-image-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/background-image-test.js should pass jshint.');
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
define('kitchens-international/tests/unit/helpers/escape-test', ['exports', 'kitchens-international/helpers/escape', 'qunit'], function (exports, _kitchensInternationalHelpersEscape, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | escape');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _kitchensInternationalHelpersEscape.escape)([42]);
    assert.ok(result);
  });
});
define('kitchens-international/tests/unit/helpers/escape-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/escape-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/escape-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/helpers/odd-test', ['exports', 'kitchens-international/helpers/odd', 'qunit'], function (exports, _kitchensInternationalHelpersOdd, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | odd');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _kitchensInternationalHelpersOdd.odd)([42]);
    assert.ok(result);
  });
});
define('kitchens-international/tests/unit/helpers/odd-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/odd-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/odd-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/helpers/validation-test', ['exports', 'kitchens-international/helpers/validation', 'qunit'], function (exports, _kitchensInternationalHelpersValidation, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | validation');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _kitchensInternationalHelpersValidation.validation)([42]);
    assert.ok(result);
  });
});
define('kitchens-international/tests/unit/helpers/validation-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/validation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/validation-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/models/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('service', 'Unit | Model | service', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('kitchens-international/tests/unit/models/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/service-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/models/store-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('store', 'Unit | Model | store', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('kitchens-international/tests/unit/models/store-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/store-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/store-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/commercial-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:commercial', 'Unit | Route | commercial', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/commercial-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/commercial-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/commercial-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/commercials-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:commercials', 'Unit | Route | commercials', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/commercials-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/commercials-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/commercials-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/design-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:design-service', 'Unit | Route | design service', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/design-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/design-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/design-service-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/endorsements-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:endorsements', 'Unit | Route | endorsements', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/endorsements-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/endorsements-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/endorsements-test.js should pass jshint.');
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
define('kitchens-international/tests/unit/routes/kitchen-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:kitchen', 'Unit | Route | kitchen', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/kitchen-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/kitchen-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/kitchen-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/kitchens-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:kitchens', 'Unit | Route | kitchens', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/kitchens-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/kitchens-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/kitchens-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:page', 'Unit | Route | page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/page-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/page-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/page/projects-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:page/projects', 'Unit | Route | page/projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/page/projects-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/page/projects-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page/projects-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:project', 'Unit | Route | project', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/project-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/store-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:store', 'Unit | Route | store', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/store-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/store-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/store-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/stories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:stories', 'Unit | Route | stories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/stories-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/stories-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stories-test.js should pass jshint.');
  });
});
define('kitchens-international/tests/unit/routes/story-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:story', 'Unit | Route | story', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('kitchens-international/tests/unit/routes/story-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/story-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/story-test.js should pass jshint.');
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
