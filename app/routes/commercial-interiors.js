import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.content.get('title');
	},
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'commercialInteriorsHome', { 'fields.slug': 'commercial-interiors' } ),
            commercialInteriors: this.get('store').query('commercialInterior', { 'order': 'fields.ranking' })
            // projects: this.get('store').findAll('commercialInterior')
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('model', model);
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
