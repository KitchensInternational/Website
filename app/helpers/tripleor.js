import Ember from 'ember';

export function eq(params /*, hash*/ ) {
  return params[0] || params[1] || params[2];
}

export default Ember.Helper.helper(eq);
