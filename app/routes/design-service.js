import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'design-service' }),
            services: this.get('store').findAll('service')
        });
    }
});
