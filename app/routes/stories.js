import Ember from 'ember';

const LIMIT = 20;

export default Ember.Route.extend({
    queryParams: {
        filter: { refreshModel: true },
        page: { refreshModel: true }
    },
    model( queryParams ) {
        let apiParams = {
            order: '-fields.publicationDate',
            skip: Math.floor((queryParams.page-1) * LIMIT),
            limit: LIMIT
        };
        if ( queryParams.filter ) {
            apiParams["fields.tag"] = queryParams.filter;
        }
        return this.get('store').query('article', apiParams);
    },
    setupController(controller, model) {
        this._super(controller, model);
        let meta = model.get('meta');
        controller.set( 'pageCount', Math.max(1, Math.floor(meta.total/LIMIT)) );
    }
});
