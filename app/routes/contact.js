import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'contact' }),
            stores: this.get('store').peekAll('store')
        });
    }
});
