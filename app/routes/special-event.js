import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
    titleToken: function (model) {
        return model.get('titleText');
    },
    model(params) {
        console.log()
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('special-event', { 'fields.slug': params.slug }),
            kitchens: this.get('store').findAll('shared-kitchen', { 'fields.approved': true })
        });
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
