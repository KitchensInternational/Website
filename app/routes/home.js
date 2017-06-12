import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let apiParams = { limit: 1, order: '-fields.publicationDate' },
            articleApiParams = { 'fields.tag': 'news' },
            eventApiParams = { 'fields.tag': 'event' };
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
            leadArticle: this.get('store').queryRecord( 'article', Object.assign(articleApiParams, apiParams) ),
            leadEvent: this.get('store').queryRecord( 'article', Object.assign(eventApiParams, apiParams) )
        });
    }
});
