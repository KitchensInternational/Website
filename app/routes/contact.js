import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.content.get('titleText');
	},
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'contact' }),
            stores: this.get('store').peekAll('store')
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('model', model);
    }
});
