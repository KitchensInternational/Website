import Ember from 'ember';

export default Ember.Route.extend({
    model( params ) {
        return this.get('store').queryRecord('article', { 'fields.slug': params.slug });
    }
});
