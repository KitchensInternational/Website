import Ember from 'ember';

const LIMIT = 10;

export default Ember.Route.extend({
    queryParams: {
        filter: { refreshModel: true }
    },
    model( queryParams ) {
        let apiParams = {
            skip: Math.floor((queryParams.page-1)*LIMIT),
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
        controller.set('page', Math.max(1, Math.ceil((meta.total-meta.skip)/LIMIT)));
        controller.set('pageCount', Math.max(1, Math.ceil(meta.total/LIMIT)));
    }
});
