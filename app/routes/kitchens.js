import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'kitchens' }),
            kitchens: this.get('store').findAll('kitchen')
        });
    }
});
