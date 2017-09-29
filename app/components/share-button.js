import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['addthis_inline_share_toolbox', 'share-buttons'],
    didRender() {
        Ember.run.scheduleOnce('afterRender', this, function () {
            if ( typeof addthis.layers.refresh === 'function' ) {
                addthis.layers.refresh();
            }
        });
    }
});
