import Ember from 'ember';
import $ from 'jquery'
export default Ember.Controller.extend({
    sales: Ember.computed(function () {
        return this.get('store').findAll('special-event');
    }),

    actions: {
        scrollDown() {
            $('html, body').animate({ scrollTop: window.innerHeight }, 800);
        }
    }
});
