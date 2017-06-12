import Ember from 'ember';

export default Ember.Mixin.create({
    topTwoImages: Ember.computed('model.images', function () {
        return this.get('model.images').slice(0, 2);
    }),
    moreImages: Ember.computed('model.images', function () {
        return this.get('model.images').slice(2);
    }),
    parentRoute: null // set by route
});
