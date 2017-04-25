import Ember from 'ember';

export default Ember.Route.extend({
    model( params ) {
        return this.get('store').queryRecord('store', { 'fields.slug': params.slug });
    },
    setupController( controller, model ) {
        this._super( controller, model );
        this.controllerFor('application').set('activeStore', model.get('slug'));
    }
});
