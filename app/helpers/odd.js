import Ember from 'ember';

export function odd(params) {
    return params[0] % 2;
}

export default Ember.Helper.helper(odd);
