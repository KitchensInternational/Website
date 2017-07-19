import Ember from 'ember';

const DELAY = 3000;
const SPEED = 500;

function carousel(selector, callback) {
    selector.delay(DELAY).fadeOut(SPEED, callback);
}

export default Ember.Component.extend({
    classNames: ['home-intro-carousel'],
    didInsertElement() {
        //carousel( Ember.$('.carousel-slide:eq(1)') );
    }
});
