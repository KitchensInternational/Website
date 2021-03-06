import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page'],
    page: 1,
    pageCount: 1,
    routing: Ember.inject.service('-routing'),
    sortedSalesOrder: ['order'],
    sortedSales: Ember.computed.sort('model.sales', 'sortedSalesOrder'),
    featuredSalesOrder: ['createdAt:asc'],
    notFeatured: ['order:desc'],
    featuredSalesOrdered: Ember.computed.sort('model.featured', 'featuredSalesOrder'),
    notFeaturedSalesOrdered: Ember.computed.sort('model.notFeatured', 'notFeatured'),
    actions: {
        changePage(page) {
            this.set('page', page);
        },
        goToArticle(slug) {
            this.get('routing.router').transitionTo('ex-display-sale', slug);
        },
        scrollDown() {
            Ember.$('html, body').animate({ scrollTop: window.innerHeight }, 800);
        },
        toggle() {
            Ember.$('.collapse').collapse('hide');
        }
    }
});
