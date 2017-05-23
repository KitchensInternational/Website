import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'a',
    classNames: ['btn', 'btn-outline-primary'],
    attributeBindings: ['target', 'href'],
    target: "_blank",
    href: Ember.computed('brochure', function () {
        return this.get('brochure');
    }),
    brochure: null,
    kitchen: null,
    click() {
        if ( typeof ga !== 'undefined' ) {
            ga('send', 'event', 'Brochure Download', this.get('kitchen'));
        }
    }
});
