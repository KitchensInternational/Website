import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page'],
    page: 1,
    pageCount: 1,
    routing: Ember.inject.service('-routing'),
    sortedSalesOrder: ['order'],
    sortedSales: Ember.computed.sort('model.sales', 'sortedSalesOrder'),
    featuredSalesOrder: ['createdAt:asc'],
    featuredSalesOrdered: Ember.computed.sort('model.featured', 'featuredSalesOrder'),
    actions: {
        changePage( page ) {
            this.set('page', page);
        },
        goToArticle( slug ) {
            this.get('routing.router').transitionTo('ex-display-sale', slug);
        }
    }
});
