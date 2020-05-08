import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';
import $ from "jquery";


export default Ember.Component.extend(formValidation, {
    classNames: ['container-fluid', 'contact-form-inner'],
    contactPhone: '0845 074 0022',
    contactEmail: 'info@kitchensinternational.co.uk',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    files: [],
    filesError: false,
    heard: '',
    selectedKitchens: Ember.A(),
    selectedPdfs: Ember.A(),
    receiveInfoVal: 'No',
    statusMessage: '',
    validationDanger: false,
    client: null,
    validate: {
        form: {
            name: {
                required: true,
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
            },
        }
    },
    isValid: Ember.computed('validationErrorExists', function () {
        return !this.get('validationErrorExists') && !this.get('filesError');
    }),
    init() {
        this._super(...arguments);

    },
    actions: {
        createKitchenEntry(images) {
            var client = window.contentfulManagement.createClient({
                accessToken: 'CFPAT-9c245c5a91670d11a9889eb603e48cdb3c00bd94c9ac2d55aff9cbc28f4eb18f'
            });
            let self = this;
            client.getSpace('nma019atkcmp')
                .then((space) => space.getEnvironment('master'))
                .then((environment) => environment.createEntry('shared-kitchen', {
                    fields: {
                        name: {
                            'en-GB': this.get('name')
                        },
                        title: {
                            'en-GB': this.get('name')
                        },
                        description: {
                            'en-GB': this.get('description')
                        },
                        email: {
                            'en-GB': this.get('email')
                        },
                        author: {
                            'en-GB': this.get('name')
                        },
                        approved: {
                            'en-GB': false
                        },
                        images: {
                            'en-GB': images
                        }
                    }
                }))
                .then((entry) => {
                    entry.publish();
                    self.set('statusMessage', 'Thank you! Kitchen will be displayed after approval.');
                    setTimeout(() => {
                        self.send('resetForm');
                    }, 3000);
                })
                .catch(console.error)
        },
        upload(e) {
            let files = e.srcElement.files;

            if (!files) {
                this.set('filesError', true);
                // console.log('files not present');
            } else {
                this.set('filesError', false);
                this.set('files', files);
            }

        },
        setSelection: function (selected) {
            this.set('heard', selected)
        },
        validateFiles() {
            let files = this.get('files');
            if (files.length < 1) {
                this.set('filesError', true);
            } else {
                this.set('filesError', false);
                this.set('files', files);
            }
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
            this.send('validateFiles');
            this.set('validationDanger', true);
            if (this.get('isValid')) {
                this.set('statusMessage', 'Sending...');
                let files = this.get('files');
                var formData = new FormData();
                for (var i = 0; i < files.length; i++) {
                    // console.log(files[i]);
                    formData.append('uploadedImages[]', files[i]);
                }
                let self = this;

                $.ajax({
                    contentType: false,
                    processData: false,
                    type: "POST",
                    url: 'https://upload.rbln7.com/uploadFiles',
                    data: formData,
                    success: function (data) {
                        let images = [];
                        let files = data.uploadedFileNames;
                        for (var i = 0; i < files.length; i++) {
                            // console.log(files[i]);
                            images.push(files[i].url);
                        }
                        self.send('createKitchenEntry', images)
                        // console.log('data nova radi', data);
                    }
                })
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
            this.set('files', []);
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
            // console.log(receive);
        },
        clickPhoneNumber() {
            ga('send', 'event', 'Click Phone Number', 'Main');
        }
    }
});
