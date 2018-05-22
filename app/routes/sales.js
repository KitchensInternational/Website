import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: function(model) {
        return model.content.get('titleText');
    },
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord('salesPage', { 'fields.slug': 'januarysale' }),
            sales: this.get('store').findAll('sale')
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('salesPage', model.content);
    }
});
