import Ember from 'ember';

export default Ember.Mixin.create({
    topTwoImages: Ember.computed('model.images', function () {
        return this.get('model.images').slice(0, 2);
    }),
    middleImages: Ember.computed('model.images', function () {
        return this.get('model.images').slice(2, 3);
    }),
    downTwoImage: Ember.computed('model.images', function () {
        return this.get('model.images').slice(3, 5);
    }),
    firstQuote: Ember.computed('model.quotes', function () {
        // console.log("this.get('model.images')", this.get('store').query( 'quote', {} ));
        return this.get('model.quotes').slice(0, 2);
    }),
    parentRoute: null // set by route
});
