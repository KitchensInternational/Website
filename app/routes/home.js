import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
            leadArticle: this.get('store').queryRecord( 'article', { limit: 1, order: '-fields.publicationDate', 'fields.tag': 'news' } ),
            leadEvent: this.get('store').queryRecord( 'article', { limit: 1, order: '-fields.publicationDate', 'fields.tag': 'event' } )
        });
    }
});
