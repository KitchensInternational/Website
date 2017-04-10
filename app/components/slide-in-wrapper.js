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
    componentOffset: 0,
    didInsertElement() {
        let component = this;
        let elementOffset = component.$().offset();
        component.set('componentOffset', elementOffset.top);
        Ember.$(window).on('scroll', function () {
            let componentOffset = component.get('componentOffset'),
                scrollTop = Ember.$(this).scrollTop(),
                fold = scrollTop - LEADING_EDGE_ALLOWANCE;
            component.set('belowTheFold', componentOffset > fold);
        });
    }
});
