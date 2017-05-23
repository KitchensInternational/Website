import Ember from 'ember';

function group( value, error, danger ) {
    if ( error ) {
        return danger ? 'has-danger' : 'has-warning';
    }
    if ( value.length > 1 ) {
        return 'has-success';
    }
    return '';
}

function control( value, error, danger ) {
    let className = '';
    if ( error ) {
        className = danger ? 'form-control-danger' : 'form-control-warning';
    }
    if ( value.length > 1 ) {
        className = 'form-control-success';
    }
    return 'form-control ' + className;
}

export function validation(params) {
    let type = params[0],
        value = params[1],
        error = params[2],
        danger = params[3];

    switch ( type ) {
        case 'form-group':
            return group( value, error, danger );
        case 'form-control':
            return control( value, error, danger );
    }
}

export default Ember.Helper.helper(validation);
