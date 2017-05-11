import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'endorsements' }),
            endorsements: this.get('store').findAll('endorsement')
        });
    }
});
