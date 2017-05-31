import Ember from 'ember';

export default Ember.Controller.extend({
    sortedServicesOrder: ['order'],
    sortedServices: Ember.computed.sort('model.services', 'sortedServicesOrder')
});
