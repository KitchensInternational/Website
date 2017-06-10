import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'project',
    model( params ) {
        return this.get('store').queryRecord('project', { 'fields.slug': params.slug });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('parentRoute', 'commercials');
    }
});
