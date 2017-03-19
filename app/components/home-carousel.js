import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'aside',
    classNames: [ 'carousel', 'carousel-home', 'slide' ],
    attributeBindings: ['data-ride'],
    "data-ride": 'carousel',
    arrowPulseSpeed: 1000,
    arrowPulse() {
        let component = this;
        component.$('.fa-chevron-down').animate({ opacity: 0.5 }, component.arrowPulseSpeed, function () {
            component.$(this).animate({ opacity: 1 }, component.arrowPulseSpeed, function () {
                component.arrowPulse();
            });
        });
    },
    didInsertElement() {
        this.arrowPulse();
    }
});
