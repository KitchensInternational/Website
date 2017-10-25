import Ember from 'ember';
import moment from 'moment';

const LIMIT = 20;

export default Ember.Route.extend({
    queryParams: {
        page: { refreshModel: true }
    },
    model( queryParams ) {
        let apiParams = {
            order: 'fields.eventDate',
            skip: Math.floor((queryParams.page-1) * LIMIT),
            limit: LIMIT,
            "fields.eventDate[gte]": moment().toISOString()
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
