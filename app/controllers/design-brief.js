import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submitBrief: function() {
            console.log('Bravo Neci ima nade za tebe');
            console.log(this.get('name'));
            
            Email.send("nemanja@darwindigital.com",
            this.get('name'),
            'testTitle',
            'testMessage',
            "email-smtp.eu-west-1.amazonaws.com",
            "AKIAJ7ND2OHTKPBHEJJQ",
            "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");
        }
    }
});
