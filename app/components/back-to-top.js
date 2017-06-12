import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['btn btn-sm btn-outline-primary'],
    click() {
        Ember.$(window).scrollTop(0);
    }
});
