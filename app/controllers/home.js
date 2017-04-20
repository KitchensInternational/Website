import Ember from 'ember';

export default Ember.Controller.extend({
    leadArticle: Ember.computed.alias('model.stories.firstObject')
});
