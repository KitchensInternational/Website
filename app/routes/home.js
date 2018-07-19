import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.content.get('titleText');
	},
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
            leadArticle: this.get('store').queryRecord( 'article', { limit: 1, order: '-fields.publicationDate' } )
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
