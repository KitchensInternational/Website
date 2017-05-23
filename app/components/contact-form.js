import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
    classNames: ['container-fluid', 'contact-form-inner'],
    'request-brochure': false,
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    selectedKitchen: '',
    validationDanger: false,
    validate: {
        form: {
            name: {
                required: true,
                format: 'fullname',
                message: 'Please enter your full name',
            },
            email: {
                required: true,
                format: 'email',
                message: 'Please enter a valid email address',
            },
            phone: {
                required: true,
                message: 'Please enter a your phone number',
            }
        }
    },
    isValid: Ember.computed('validationErrorExists', function () {
        return !this.get('validationErrorExists');
    }),
    actions: {
        triggerValidation() {
            let form = {
                name: this.get('name'),
                email: this.get('email'),
                phone: this.get('phone'),
                address: this.get('address'),
                message: this.get('message'),
                kitchen: this.get('selectedKitchen')
            };
            this.send('validate_form_action', form);
            this.set('validationDanger', false);
        },
        triggerSubmit() {
            this.send('triggerValidation');
            this.set('validationDanger', true);
            if ( this.get('isValid') ) {
                alert('WHEN FINISHED THIS WILL SEND THE FORM');

                if ( typeof ga !== 'undefined' ) {
                    let formType = this.get('request-brochure') ? 'Brochure Request' : 'Standard';
                    ga('send', 'event', 'Contact Form', 'Submitted', formType, this.get('selectedKitchen'));
                }
            }
        }
    }
});
