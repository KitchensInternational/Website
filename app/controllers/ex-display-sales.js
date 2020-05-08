import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page'],
    page: 1,
    pageCount: 1,
    routing: Ember.inject.service('-routing'),
    actions: {
        changePage( page ) {
            this.set('page', page);
        },
        goToArticle( slug ) {
            // console.log(slug);
            this.get('routing.router').transitionTo('ex-display-sale', slug);
        }
    }
});
