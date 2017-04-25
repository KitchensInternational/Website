import Ember from 'ember';

export default Ember.Controller.extend({
    routing: Ember.inject.service('-routing'),
    activeStore: null,
    stores: Ember.computed(function () {
        return this.get('store').query('store', { order: 'fields.town' });
    })
});
