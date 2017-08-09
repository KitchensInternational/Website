import Ember from 'ember';

export default Ember.Controller.extend({
    sortedKitchensOrder: ['order'],
    sortedKitchens: Ember.computed.sort('model.kitchens', 'sortedKitchensOrder')
});
