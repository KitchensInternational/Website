import Ember from 'ember';

const FADE_IN_SPEED = 1000;
const SLIDE_DELAY = 400;
const SLIDE_PAUSE = 1800;

function fadeInElement(elements, index) {
    $(elements[index]).delay(SLIDE_DELAY).fadeIn(FADE_IN_SPEED, function () {
        if ( index < elements.length - 1 ) {
            $(this).delay(SLIDE_PAUSE).fadeOut(FADE_IN_SPEED, function () {
                index = index + 1;
                fadeInElement(elements, index);
            });
        }
    });
}

export default Ember.Component.extend({
    classNames: ['fade-in-images'],
    didInsertElement() {
        let elements = this.$('*');
        fadeInElement(elements, 0);
    }
});
