import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    classNames: ['blog-control'],
    onFilter: null,
    currentFilter: null,
    actions: {
        triggerFilter( filter ) {
            this.sendAction('onFilter', filter);
        }
    }
});
