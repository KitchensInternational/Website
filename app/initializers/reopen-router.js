import Ember from 'ember';

export function initialize() {

    Ember.Router.reopen({
        notifyGoogleAnalytics: function() {
            if ( typeof ga === 'undefined' ) {
                return;
            }
            return ga('send', 'pageview', {
                'page': this.get('url'),
                'title': this.get('url')
            });
        }.on('didTransition')
    });

}

export default {
  name: 'reopen-router',
  initialize
};
