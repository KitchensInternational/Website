import Ember from 'ember';

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
            content: this.get('store').queryRecord('page', { 'fields.slug': 'stories' }),
            articles: this.get('store').query('article', apiParams)
        });
    },
    setupController(controller, model) {
        this._super(controller, model);
        let meta = model.articles.get('meta');
        controller.set( 'pageCount', Math.max(1, Math.floor(meta.total/LIMIT)) );
    }
});
