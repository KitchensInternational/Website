import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
    classNames: ['container-fluid', 'contact-form-inner'],
    requestBrochure: false,
    kitchens: Ember.A(),
    bookEvent: false,
    formType: Ember.computed(function () {
        if ( this.get('requestBrochure') ) {
            return 'Brochure Request';
        }
        if ( this.get('bookEvent') ) {
            return 'Book Event';
        }
        return 'Contact Form';
    }),
    contactPhone: '0845 074 0022',
    contactEmail: 'info@kitchensinternational.co.uk',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    selectedKitchens: Ember.A(),
    receiveInfoVal: 'No',
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
    init() {
        this._super(...arguments);
        if(Ember.getOwner(this).lookup('controller:application').get('currentRouteName') == 'commercial-interiors') {
            this.set('contactPhone', '07768 636 565');
        } else {
            this.set('contactPhone', '0845 074 0022');
        }
    },
    actions: {
        triggerValidation() {
            let form = {
                name: this.get('name'),
                email: this.get('email'),
                phone: this.get('phone'),
                address: this.get('address'),
                message: this.get('message'),
                kitchens: this.get('selectedKitchens')
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
                    message += "Phone: " + this.get('phone') + "\n\n";

                if ( this.get('bookEvent') ) {

                    message += "Please book me in to your event: " + this.get('bookEvent.title');

                } else {

                    if ( this.get('message.length') > 0 ) {
                        message += "Message: " + this.get('message') + "\n\n";
                        message += "Address: " + this.get('address') + "\n\n";
                    } else {
                        message += "Please send me a brochure.\n\n";
                        message += "Address: " + this.get('address') + "\n\n";
                        message += "Kitchens:" + this.get('selectedKitchens').join(", ") + "\n\n";
                    }

                }

                message += "Receive information: " + this.get('receiveInfoVal') + "\n\n";
                var tempTitle = Ember.getOwner(this).lookup('controller:application').get('currentRouteName') == 'commercial-interiors' ? 'New commercial interiors contact form submission' : 'New contact form submission!';
                Email.send("info@kitchensinternational.co.uk",
                    this.get('contactEmail'),
                    tempTitle,
                    message,
                    "email-smtp.eu-west-1.amazonaws.com",
                    "AKIAJ7ND2OHTKPBHEJJQ",
                    "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");

                this.set('statusMessage', 'Thank you! Message sent.');

                Ember.run.later(this, function () {
                    this.send('resetForm');
                }, 500);

                if ( typeof ga !== 'undefined' ) {
                    let formType = this.get('formType');
                    ga('send', 'event', 'Contact Form', 'Submitted', formType);
                }
            }
        },
        resetForm() {
            this.set('name', '');
            this.set('email', '');
            this.set('phone', '');
            this.set('address', '');
            this.set('message', '');
            this.set('selectedKitchens', Ember.A());
            this.set('reveiveInfo', false);
            this.set('statusMessage', '');
            Ember.$('input[type="checkbox"]').attr('checked', false);
            this.$().parents('.modal').modal('hide');
        },
        selectedKitchen( kitchenName ) {
            let selectedKitchens = this.get('selectedKitchens');
            selectedKitchens.push( kitchenName );
            this.set('selectedKitchens', selectedKitchens);
        },
        receiveInfo(val) {
            let receive = val ? 'Yes' : 'No';
            this.set('receiveInfoVal', receive);
            console.log(receive);
        },
        clickPhoneNumber() {
            ga('send', 'event', 'Click Phone Number', 'Main');
        }
    }
});
