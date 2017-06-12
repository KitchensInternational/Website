import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
    classNames: ['container-fluid', 'contact-form-inner'],
    'request-brochure': false,
    contactEmail: 'matt@ignite-yourbrand.com',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    selectedKitchen: '',
    statusMessage: '',
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

                this.set('statusMessage', 'Sending...');

                let message = "Hello\n\nYou have a new message from ";
                    message += this.get('name');
                    message += " (" + this.get('email') + ")\n\n";
                if ( this.get('message.length') > 0 ) {
                    message += this.get('message');
                } else {
                    message += "Please send me a brochure.\n\n";
                    message += "Address: " + this.get('address') + "\n\n";
                    message += "Kitchen:" + this.get('selectedKitchen') + "\n\n";
                }

                Email.send("matt@ignite-yourbrand.com",
                    this.get('contactEmail'),
                    "New contact form submission!",
                    message,
                    "email-smtp.eu-west-1.amazonaws.com",
                    "AKIAJ7ND2OHTKPBHEJJQ",
                    "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");

                this.set('statusMessage', 'Thank you! Message sent.');

                Ember.run.later(this, function () {
                    this.send('resetForm');
                }, 500);

                if ( typeof ga !== 'undefined' ) {
                    let formType = this.get('request-brochure') ? 'Brochure Request' : 'Standard';
                    ga('send', 'event', 'Contact Form', 'Submitted', formType, this.get('selectedKitchen'));
                }
            }
        },
        resetForm() {
            this.set('name', '');
            this.set('email', '');
            this.set('phone', '');
            this.set('address', '');
            this.set('message', '');
            this.set('selectedKitchen', '');
            this.set('statusMessage', '');
        }
    }
});
