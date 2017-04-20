import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('homePage', { 'fields.slug': 'home' }),
            stories: this.get('store').query('article', { limit: 1 })
        });
    }
});
