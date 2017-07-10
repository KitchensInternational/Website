import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [ 'carousel', 'slide' ],
    attributeBindings: [ 'data-ride', 'data-pause', 'data-interval' ],
    "data-ride": 'carousel',
    "data-pause": null,
    "data-interval": 3000,
    images: Ember.A(),
    showControls: true,
    showIndicators: false
});
