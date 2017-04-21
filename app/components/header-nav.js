import Ember from 'ember';

const ANIMATION_DELAY = 400;
const NAV_ANIMATION_SPEED = 200;

function toggleMainMenuHandler() {
    let navElement = this.$('nav'),
        timeoutsArray = this.get('timeouts');

    this.clearTimeouts();
    this.startSpinMenuButtonIcon();

    if ( this.get('mainMenuVisible') === false ) {

        navElement.addClass('nav-visible');

        let menuItems = navElement.find('li');

        let showNavTimeout = Ember.run.later(this, function() {
            menuItems.each(function ( index ) {
                let menuItemTimeout = Ember.run.later(this, function() {
                    Ember.$(this).addClass('item-visible');
                }, index * NAV_ANIMATION_SPEED);
                timeoutsArray.push(menuItemTimeout);
            });
        }, ANIMATION_DELAY);
        timeoutsArray.push(showNavTimeout);

        let showNavButtonsTimeout = Ember.run.later(this, function () {
            this.$('.btn-outline-secondary').removeClass('btn-outline-secondary').addClass('btn-secondary');
            this.$('.logo-nav').hide();
            this.$('.logo-menu').show();
            this.stopSpinMenuButtonIcon();
            this.showMenuButtonClose();
        }, ANIMATION_DELAY);
        timeoutsArray.push(showNavButtonsTimeout);

        this.set('mainMenuVisible', true);

    } else {

        navElement.find('li').removeClass('item-visible');
        let hideNavTimeout = Ember.run.later(this, function() {
            navElement.removeClass('nav-visible');
        }, ANIMATION_DELAY);
        timeoutsArray.push(hideNavTimeout);

        let hideMenuButtonTimeout = Ember.run.later(this, function () {
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

export default Ember.Component.extend({
    tagName: 'header',
    startSpinMenuButtonIcon() {
        this.$('i.fa').addClass('fa-spin');
    },
    stopSpinMenuButtonIcon() {
        this.$('i.fa').removeClass('fa-spin');
    },
    showMenuButtonClose() {
        this.$('i.fa').removeClass('fa-navicon').addClass('fa-close');
    },
    hideMenuButtonClose() {
        this.$('i.fa').removeClass('fa-close').addClass('fa-navicon');
    },
    mainMenuVisible: false,
    timeouts: Ember.A(),
    clearTimeouts() {
        this.get('timeouts').forEach(( timeout ) => {
            Ember.run.cancel(timeout);
        });
    },
    actions: {
        toggleMainMenu() {
            Ember.run.debounce(this, toggleMainMenuHandler, 300);
        }
    }
});
