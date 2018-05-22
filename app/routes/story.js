import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.get('titleText');
	},
    model( params ) {
        return this.get('store').queryRecord('article', { 'fields.slug': params.slug });
    },
    setupController(controller, model) {
        this._super(controller, model);
    }
});
