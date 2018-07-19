import Ember from 'ember';
const { set } = Ember;

const LIMIT = 20;

export default Ember.Route.extend({
    queryParams: {
        filter: { refreshModel: true },
        page: { refreshModel: true }
    },
    titleToken: function(model) {
        return model.content.get('titleText');
    },
    model( queryParams ) {
        let apiParams = {
            order: '-fields.publicationDate',
            skip: Math.floor((queryParams.page-1) * LIMIT),
            limit: LIMIT
        };
        return Ember.RSVP.hash({
            featured: this.get('store').query('featuredsale', {}),
            sales: this.get('store').findAll('sale'),
            sale:  this.get('store').queryRecord('salesPage', { 'fields.slug': 'summersale' }),
            content: this.get('store').queryRecord('page', { 'fields.slug': 'summer-sale' }),
            articles: this.get('store').query('exDisplaySale', apiParams)
        });
    },
    setupController(controller, model) {
        this._super(controller, model);
        let meta = model.articles.get('meta');
        controller.set( 'pageCount', Math.max(1, Math.floor(meta.total/LIMIT)) );
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
