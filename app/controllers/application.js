import Ember from 'ember';

export default Ember.Controller.extend({
    routing: Ember.inject.service('-routing'),
    activeStore: null,
    stores: Ember.computed(function () {
        return this.get('store').query('store', { order: 'fields.town' });
    }),
    currentPathDidChange: function() {
        let path = this.get('currentPath');
        if ( typeof Ember.$ === 'function' && typeof document !== 'undefined' ) {
            Ember.$('body').attr('id', path);
            Ember.$(document).attr('title', 'title');
        }

        return path;
      }.observes('currentPath')
});
