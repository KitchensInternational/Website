import Ember from 'ember';

const LEADING_EDGE_ALLOWANCE = 30;

export default Ember.Component.extend({

    classNameBindings: ['belowTheFold:below-the-fold:above-the-fold', 'position'],

    belowTheFold: true,
    position: 'center',

    componentOffset: 0,

    didInsertElement() {
        let component = this;

        let elementOffset = component.$().offset();
        component.set('componentOffset', elementOffset.top);

        Ember.$(window).on('scroll', function () {
            let componentOffset = component.get('componentOffset'),
                scrollTop = $(this).scrollTop(),
                fold = scrollTop - LEADING_EDGE_ALLOWANCE;

            component.set('belowTheFold', componentOffset > fold);
        });
    }

});
