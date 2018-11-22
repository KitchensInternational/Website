import Ember from 'ember';

export default Ember.Controller.extend({
  kitchens: Ember.computed(function () {
    return this.get('store').findAll('kitchen');
  }),
  isButton: Ember.computed(function () {
    let options = ['download', 'request'];
    let rand = Math.floor((Math.random() * 2));
    if (typeof ga !== 'undefined') {
      let option = options[rand] == 'request' ? 'Test 1B - Email Brochure Download' : 'Test 1A - Current Brochure Download'
      ga('send', 'event', 'Option displayed', option, option);
    }
    return false
  })
});
