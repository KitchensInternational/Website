import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['white-text:btn-outline-secondary:btn-outline-primary'],
    attributeBindings: ['data-toggle', 'data-target'],
    'white-text': true,
    'data-toggle': 'modal',
    'data-target': Ember.computed('contact-form', function () {
        return '#' + this.get('form-id');
    }),
    'form-id': 'contact-form',
    click() {
        if(document.location.pathname == '/commercial-interiors') {
            // Ember.$('#contactFormNumber').html('07768 636 565');
            // Ember.$('#contactFormNumber').attr('href', 'tel:+4407768 636 565');
        }
        console.log(document.location.pathname);
        if ( typeof ga !== 'undefined' ) {
            ga('send', 'event', 'Contact Form', 'Opened', this.get('form-id'));
        }
    }
});
