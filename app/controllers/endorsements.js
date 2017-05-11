import Ember from 'ember';

export default Ember.Controller.extend({
    sortedEndorsementsOrder: ['order'],
    sortedEndorsements: Ember.computed.sort('model.endorsements', 'sortedEndorsementsOrder')
});
