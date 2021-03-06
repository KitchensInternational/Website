import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';

export default Ember.Component.extend(formValidation, {
  classNames: ['container-fluid', 'contact-form-inner'],
  requestBrochure: false,
  downloadBrochure: false,
  sale: false,
  kitchens: Ember.A(),
  bookEvent: false,
  formType: Ember.computed(function () {
    if (this.get('requestBrochure')) {
      return 'Brochure Request';
    }
    if (this.get('bookEvent')) {
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
  heard: '',
  numOfPeople: '',
  time: '',
  selectedKitchens: Ember.A(),
  selectedPdfs: Ember.A(),
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
        required: false,
        message: 'Please enter a your phone number',
      }
    }
  },
  isValid: Ember.computed('validationErrorExists', function () {
    return !this.get('validationErrorExists');
  }),
  init() {
    this._super(...arguments);
    if (Ember.getOwner(this).lookup('controller:application').get('currentRouteName') == 'commercial-interiors') {
      this.set('contactPhone', '07768 636 565');
    } else {
      this.set('contactPhone', '0845 074 0022');
    }
  },
  actions: {
    setSelection: function (selected) {
      this.set('heard', selected)
    },
    setPeople: function (selected) {
      this.set('numOfPeople', selected)
    },
    setTime: function (selected) {
      this.set('time', selected)
    },
    triggerValidation() {
      let form = {
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone'),
        address: this.get('address'),
        heard: this.get('heard'),
        message: this.get('message'),
        kitchens: this.get('selectedKitchens')
      };
      this.send('validate_form_action', form);
      this.set('validationDanger', false);
    },
    triggerSubmit() {
     
      this.send('triggerValidation');
      this.set('validationDanger', true);
      if (this.get('isValid')) {

        if (this.get('downloadBrochure')) {
          this.set('statusMessage', 'Downloading...');

        } else {
          this.set('statusMessage', 'Sending...');
        }

        let message = "Hello\n\nYou have a new message from ";
        message += this.get('name');
        message += " (" + this.get('email') + ")\n\n";
        message += "Phone: " + this.get('phone') + "\n\n";

        if (this.get('bookEvent')) {

          message += "Please book me in to your event: " + this.get('bookEvent.title');

        } else {

          if (this.get('message.length') > 0) {
            message += "Message: " + this.get('message') + "\n\n";
            message += "Address: " + this.get('address') + "\n\n";
            if (this.get('sale')) {
              message += "How did you hear about us: " + this.get('heard') + "\n\n";
            }
          } else {
            message += "Please send me a brochure.\n\n";
            message += "Address: " + this.get('address') + "\n\n";
            message += "Kitchens:" + this.get('selectedKitchens').join(", ") + "\n\n";
          }

        }

        message += "Receive information: " + this.get('receiveInfoVal') + "\n\n";
        message += "From which page it was sent: " + window.location.href + "\n\n";
        var tempTitle = Ember.getOwner(this).lookup('controller:application').get('currentRouteName') == 'commercial-interiors' ? 'New commercial interiors contact form submission' : 'New contact form submission!';
        if (this.get('sale')) {
          tempTitle = 'New January Sale contact form submission'
        }
        if (this.get('numOfPeople')) {
          message += "Additional number of people: " + this.get('numOfPeople') + "\n\n";;
        }
        if (this.get('time')) {
          message += "Time: " + this.get('time') + "\n\n";;
        }

        if (!this.get('downloadBrochure')) {
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

          if (typeof ga !== 'undefined') {
            let formType = this.get('formType');
            ga('send', 'event', 'Contact Form', 'Submitted', formType);
          }
        } else {
          let pdfs = this.get('selectedPdfs');
          let message = "Hello\n\nthe following person has downloaded a brochure\n\n";
          message += this.get('name');
          message += " (" + this.get('email') + ")\n\n";
          message += "Phone: " + this.get('phone') + "\n\n";
          message += "Address: " + this.get('address') + "\n\n";
          message += "Receive information: " + this.get('receiveInfoVal') + "\n\n";

          tempTitle = 'Brochure download'
          message += "From which page it was sent: " + window.location.href + "\n\n";
          Email.send("info@kitchensinternational.co.uk",
            this.get('contactEmail'),
            tempTitle,
            message,
            "email-smtp.eu-west-1.amazonaws.com",
            "AKIAJ7ND2OHTKPBHEJJQ",
            "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");

          this.set('statusMessage', 'Thank you! Message sent.');

          this.set('statusMessage', 'downloadDisplay')
          if (typeof ga !== 'undefined') {
            ga('send', 'event', 'Option used', 'Test 1A - Email Brochure Download');
          }
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
    selectedKitchen(kitchenName, kitchen) {
      let selectedKitchens = this.get('selectedKitchens');
      let selectedPdfs = this.get('selectedPdfs');
      selectedKitchens.push(kitchenName);
      selectedPdfs.push(kitchen);
      this.set('selectedKitchens', selectedKitchens);
      this.set('selectedPdfs', selectedPdfs);
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
