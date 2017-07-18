import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-check'],
    kitchen: Ember.K(),
    isChecked: false,
    onSelect: null,
    actions: {
        triggerSelect() {
            this.sendAction('onSelect', this.get('kitchen.name'));
        }
    }
});
