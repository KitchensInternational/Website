import Ember from 'ember';

const PAGE_SPAN = 5;

export default Ember.Component.extend({
    tagName: 'nav',
    classNames: ['pagination-control'],
    currentPage: 1,
    pageCount: 1,


    pages: Ember.computed('currentPage', 'pageCount', function () {
        let pages = [],
            page = this.get('currentPage');
        if ( page >= 3 ) {
            page = page - 2;
        } else if ( page === 2 ) {
            page = 1;
        }
        let pageCount = this.get('pageCount'),
            pageLimit = page + Math.min(PAGE_SPAN, pageCount);
        if ( pageLimit > pageCount ) {
            pageLimit = pageCount + 1;
            page = pageCount - PAGE_SPAN + 1;
        }
        for ( page; page < pageLimit; page++ ) {
            pages.push( page );
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
