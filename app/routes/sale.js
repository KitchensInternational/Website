import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.get('titleText');
	},
    model( params ) {
        return this.get('store').queryRecord('sale', { 'fields.slug': params.slug });
    },
    setupController( controller, model ) {
        this._super(controller, model);
    },
    headData: Ember.inject.service(),
    afterModel(model) {
        set(this, 'headData.title', model.content.get('metaTitle'));
        set(this, 'headData.description', model.content.get('metaDescription'));
        if(model.content.get('metaImage').content) {
            set(this, 'headData.image', model.content.get('metaImage').content.data.file.url);
        }
    }
});
