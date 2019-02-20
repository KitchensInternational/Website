import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['sign-up-form', 'modal', 'fade'],
    attributeBindings: ['tabindex', 'role', 'aria-hidden'],
    tabindex: '-1',
    role: 'dialog',
    'aria-hidden': 'true'
});
