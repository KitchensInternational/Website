import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['clickable'],
    click() {
        Ember.$(window).scrollTop(0);
    }
});
