import Ember from 'ember';

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
                component.$('nav').animate({ width: '100%', height: '100%' }, 400, function () {
                    component.$('nav ul').fadeIn(250, function () {
                        component.stopSpinMenuButtonIcon();
                        component.showMenuButtonClose();
                        component.set('mainMenuVisible', true);
                    });
                });
            } else {
                component.$('nav ul').fadeOut(250, function () {
                    component.$('nav').animate({ height: '0%', width: '0%' }, 400, function () {
                        component.stopSpinMenuButtonIcon();
                        component.hideMenuButtonClose();
                        component.set('mainMenuVisible', false);
                    });
                });
            }
        }
    }
});
