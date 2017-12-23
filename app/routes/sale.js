import Ember from 'ember';

export default Ember.Route.extend({
    model( params ) {
        return this.get('store').queryRecord('sale', { 'fields.slug': params.slug });
    }
});
