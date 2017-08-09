import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'projects' }),
            projects: this.get('store').query('project', { 'fields.commercialProject': false, 'order': 'fields.ranking' })
        });
    }
});
