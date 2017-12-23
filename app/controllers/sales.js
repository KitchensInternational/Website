import Ember from 'ember';

export default Ember.Controller.extend({
    sortedSalesOrder: ['order'],
    sortedSales: Ember.computed.sort('model.sales', 'sortedSalesOrder')
});