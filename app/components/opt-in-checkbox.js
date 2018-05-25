import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-check'],
	isChecked: false,
	actions: {
		triggerCheck (e) {
			this.sendAction('onCheck', e.target.checked);
		}
	}
});
