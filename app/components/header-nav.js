import Ember from 'ember';

const BREAK_FADE_SPEED = 300;
const NAV_ANIMATION_SPEED = 600;
const PAGE_LINK_SLIDE_SPEED = 700;

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
    actions: {
        toggleMainMenu() {
            let component = this;
            component.startSpinMenuButtonIcon();
            if ( component.get('mainMenuVisible') === false ) {
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
