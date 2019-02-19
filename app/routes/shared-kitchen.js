import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
    titleToken: function (model) {
        return model.get('titleText');
    },
    model(params) {
        this.get('store').queryRecord('shared-kitchen', { 'fields.slug': params.slug })
    },

    setupController(controller, model) {
        this._super(controller, model);
    },
    headData: Ember.inject.service(),

    afterModel(model) {
        // set(this, 'headData.title', model.get('metaTitle'));
        // set(this, 'headData.description', model.get('metaDescription'));
        // if (model.get('metaImage').content) {
        //     set(this, 'headData.image', model.get('metaImage').content.data.file.url);
        // }
    }
});
