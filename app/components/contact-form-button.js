import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn', 'btn-outline-secondary'],
    attributeBindings: ['data-toggle', 'data-target'],
    'data-toggle': 'modal',
    'data-target': Ember.computed('contact-form', function () {
        return '#' + this.get('form-id');
    }),
    'form-id': 'contact-form'
});
