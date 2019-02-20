import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['white-text:btn-outline-secondary:btn-outline-primary'],
    attributeBindings: ['data-toggle', 'data-target'],
    'white-text': true,
    'data-toggle': 'modal',
    'data-target': '#sign-up-form',
    'form-id': 'contact-form'
});
