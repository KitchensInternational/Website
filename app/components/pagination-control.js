import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    classNames: ['pagination-control'],
    currentPage: 1,
    pageCount: 1,
    pages: Ember.computed('pageCount', function () {
        let pages = [], n = 0, pageCount = this.get('pageCount');
        for ( n; n < pageCount; n++ ) {
            pages.push( n+1 );
        }
        return pages;
    }),
    canGoBack: Ember.computed('currentPage', function () {
        return this.get('currentPage') > 1;
    }),
    canGoForward: Ember.computed('currentPage', 'pageCount', function () {
        return this.get('currentPage') < this.get('pageCount');
    }),
    onChangePage: null,
    actions: {
        goToPrevious() {
            if ( this.get('canGoBack') ) {
                this.send('goToPage', this.get('currentPage') - 1);
            }
        },
        goToPage( page ) {
            this.sendAction('onChangePage', page);
        },
        goToNext() {
            if ( this.get('canGoForward') ) {
                this.send('goToPage', this.get('currentPage') + 1);
            }
        }
    }
});
