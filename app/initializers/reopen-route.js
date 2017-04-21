import Ember from 'ember';

export function initialize() {

    const BASE_TITLE = 'Kitchens International';

    Ember.Route.reopen({

		setPageTitle: function(model) {

            let title = BASE_TITLE;

            if ( typeof model !== 'undefined' && model && typeof model.get !== 'undefined' && typeof model.get('title') !== 'undefined' ) {
                title = model.get('title') + ' | ' + BASE_TITLE;
            }

            $(document).attr('title', title);
		},

		enter: function() {
			this._super(...arguments);
			this.setPageTitle();
		},

		setupController: function(controller, model) {
			this._super(...arguments);
			this.setPageTitle(model);
            $(window).scrollTop(0);
		}

	});

}

export default {
  name: 'reopen-route',
  initialize
};
