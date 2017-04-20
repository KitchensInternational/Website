import Ember from 'ember';

export function escape(params) {
    return Ember.String.htmlSafe(params.join(''));
}

export default Ember.Helper.helper(escape);
