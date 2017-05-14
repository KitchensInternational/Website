import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['filter', 'page'],
    filter: null,
    page: 1,
    pageCount: 1,
    actions: {
        addFilter( filter ) {
            this.set('filter', filter);
        },
        changePage( page ) {
            this.set('page', page);
        }
    }
});
