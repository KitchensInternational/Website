import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.get('titleText');
    },
    templateName: 'project',
    model( params ) {
        return this.get('store').queryRecord('project', { 'fields.slug': params.slug });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('parentRoute', 'commercials');
    },
    headData: Ember.inject.service(),
    afterModel(model) {
        set(this, 'headData.title', model.get('metaTitle'));
        set(this, 'headData.description', model.get('metaDescription'));
        if(model.get('metaImage').content) {
            set(this, 'headData.image', model.get('metaImage').content.data.file.url);
        }
    }
});
