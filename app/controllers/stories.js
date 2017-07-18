import Ember from 'ember';

export default Ember.Controller.extend({
    sortedStoriesOrder: ['publicationDate'],
    sortedStories: Ember.computed.sort('model', 'sortedStories'),
    queryParams: ['filter', 'page'],
    filter: null,
    page: 1,
    pageCount: 1,
    routing: Ember.inject.service('-routing'),
    actions: {
        addFilter( filter ) {
            this.set('filter', filter);
            this.set('page', 1);
        },
        changePage( page ) {
            this.set('page', page);
        },
        goToArticle( slug ) {
            this.get('routing.router').transitionTo('story', slug);
        }
    }
});
