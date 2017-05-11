import Ember from 'ember';

const LEADING_EDGE_ALLOWANCE = 100;

export default Ember.Component.extend({
    tagName: 'h1',
    classNames: ['move-to-heading-after-scroll'],
    didInsertElement() {
        Ember.$('header').first().prepend('<span class="display-4 after-scroll-heading text-white hidden-sm-down hidden">remove me please</span>');
        Ember.run.once(this, function () {
            let componentElement = this.$(),
                headingPositionTop = componentElement.offset().top;
            Ember.$(window).on('scroll', function () {
                let windowScrollTop = Ember.$(this).scrollTop(),
                    afterScrollHeading = Ember.$('.after-scroll-heading').first();
                if ( headingPositionTop < windowScrollTop - LEADING_EDGE_ALLOWANCE ) {
                    // display heading
                    if ( afterScrollHeading.hasClass('hidden') ) {
                        afterScrollHeading.text( componentElement.text() ).removeClass('hidden').addClass('visible');
                    }
                } else {
                    // hide heading
                    if ( afterScrollHeading.hasClass('visible') ) {
                        afterScrollHeading.removeClass('visible').addClass('hidden').text();
                    }
                }
            });
        });
    },
    willDestroyElement() {
        Ember.$(window).off('scroll');

    }
});
