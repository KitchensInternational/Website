import Ember from 'ember';

const DELAY = 3000;
const SPEED = 500;

function carousel(selectorClass, index, callback) {
    $(selectorClass + ':eq(' + index + ')').delay(DELAY).fadeOut(SPEED, callback);
}

export default Ember.Component.extend({
    classNames: ['home-intro-carousel'],
    didInsertElement() {
        carousel('.carousel-slide', 2, function () {
            carousel('.carousel-slide', 1, function () {
                $('video.carousel-slide')[0].play();
                $('.show-me-on-video-play').delay(DELAY).fadeIn(SPEED*3);
            });
        });
    }
});
