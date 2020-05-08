import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
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
                required: false,
                message: 'Please enter a your phone number',
            }
        }
    },
    actions: {
        submitBrief() {
            console.log('Ovo je iz komponente');
        }
    }
});
