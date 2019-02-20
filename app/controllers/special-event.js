import Ember from 'ember';

export default Ember.Controller.extend({
    sales: Ember.computed(function () {
        return this.get('store').findAll('special-event');
    }),
    willRender() {
    },
    actions: {
        scrollDown() {
            $('html, body').animate({ scrollTop: window.innerHeight }, 800);
            console.log('ojjaaaa');
        }
    }
});
