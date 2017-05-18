import Ember from 'ember';

export function objectAt(params) {
    let list = params[0],
        index = params[1],
        attribute = params[2];
    if ( list.get('length') > 0 ) {
        let object = list.objectAt( index );
        if ( typeof object !== 'undefined' ) {
            return attribute ? object.get(attribute) : object;
        }
    }
    return null;
}

export default Ember.Helper.helper(objectAt);
