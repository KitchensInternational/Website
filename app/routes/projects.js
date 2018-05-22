import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.content.get('titleText');
	},
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'projects' }),
            projects: this.get('store').query('project', { 'fields.commercialProject': false, 'order': 'fields.ranking' })
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
    }
});
