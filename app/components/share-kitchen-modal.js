import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['share-kitchen-form', 'modal', 'fade'],
    attributeBindings: ['tabindex', 'role', 'aria-hidden'],
    tabindex: '-1',
    role: 'dialog',
    'aria-hidden': 'true'
});
