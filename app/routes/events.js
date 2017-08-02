import Ember from 'ember';

const LIMIT = 20;

export default Ember.Route.extend({
    queryParams: {
        page: { refreshModel: true }
    },
    model( queryParams ) {
        let apiParams = {
            order: 'fields.eventDate',
            skip: Math.floor((queryParams.page-1) * LIMIT),
            limit: LIMIT
        };
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('page', { 'fields.slug': 'events' }),
            events: this.get('store').query('event', apiParams)
        });
    },
    setupController(controller, model) {
        this._super(controller, model);
        let meta = model.events.get('meta');
        controller.set( 'pageCount', Math.max(1, Math.floor(meta.total/LIMIT)) );
    }
});
