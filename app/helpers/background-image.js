import Ember from 'ember';

export function backgroundImage(params/*, hash*/) {
    return Ember.String.htmlSafe( 'background-image: url(' + params[0] + ')' );
}

export default Ember.Helper.helper(backgroundImage);
