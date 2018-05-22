import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
   tokens = Ember.makeArray(tokens);
   tokens.unshift('Kitchens International');
   return tokens.reverse().join(' - ');
  }
});