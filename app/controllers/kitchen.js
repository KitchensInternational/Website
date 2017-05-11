import Ember from 'ember';

export default Ember.Controller.extend({
    kitchens: Ember.computed(function () {
        return this.get('store').findAll('kitchen');
    })
});
