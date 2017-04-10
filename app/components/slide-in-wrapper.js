import Ember from 'ember';

const LEADING_EDGE_ALLOWANCE = 30;

export default Ember.Component.extend({
    classNames: ['slide-in-wrapper'],
    belowTheFold: true,
    position: 'center',
    displayLeft: Ember.computed('position', function () {
        return this.get('position') === 'left';
    }),
    displayRight: Ember.computed('position', function () {
        return this.get('position') === 'right';
    }),
    displayCenter: Ember.computed('position', function () {
        return this.get('position') === 'center';
    }),
    didInsertElement() {
        Ember.run.once(this, function () {
            let component = this;
            Ember.$(window).on('scroll', function () {
                let windowElement = Ember.$(this),
                componentOffset = component.$().offset().top,
                scrollTop = windowElement.scrollTop(),
                windowHeight = windowElement.scrollTop(),
                fold = scrollTop + windowHeight - LEADING_EDGE_ALLOWANCE;
                component.set('belowTheFold', componentOffset > fold);
            });
        });
    }
});
