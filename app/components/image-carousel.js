import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [ 'carousel', 'slide' ],
    attributeBindings: [ 'data-ride' ],
    "data-ride": 'carousel',
    images: Ember.A(),
    showControls: true,
    showIndicators: false
});
