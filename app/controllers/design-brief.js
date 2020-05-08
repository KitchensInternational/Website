import Ember from 'ember';

export default Ember.Controller.extend({
    // contactEmail: 'info@kitchensinternational.co.uk',
    contactEmail: 'blagojevicnemanja14@yahoo.com',
    actions: {
        submitBrief: function() {
            let tempTitle = 'Design Brief';
            let message = "Hello\n\nthe following person has filled in the brief\n\n";
            message += this.get('name');
            message += " (" + this.get('email') + ")\n\n";
            message += "Phone: " + this.get('phone') + "\n\n";
            message += "Address: " + this.get('address') + "\n\n";
            
            // console.log(message);
            // console.log(this.get('emailAddress'));
            
            Email.send("info@kitchensinternational.co.uk",
            this.get('contactEmail'),
            tempTitle,
            message,
            "email-smtp.eu-west-1.amazonaws.com",
            "AKIAJ7ND2OHTKPBHEJJQ",
            "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");
        }
    }
});
