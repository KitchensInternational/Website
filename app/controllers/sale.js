import Ember from 'ember';

export default Ember.Controller.extend({
    sales: Ember.computed(function () {
        return this.get('store').findAll('sale');
    })
});
