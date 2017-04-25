import Ember from 'ember';

export default Ember.Route.extend({
    model( params ) {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'projects' }),
            projects: this.get('store').findAll('project')
        });
    }
});
