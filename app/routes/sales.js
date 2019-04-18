import Ember from 'ember';
const { set } = Ember;

const LIMIT = 20;

export default Ember.Route.extend({
    queryParams: {
        filter: { refreshModel: true },
        page: { refreshModel: true }
    },
    titleToken: function (model) {
        return model.content.get('titleText');
    },
    model(queryParams) {
        let apiParams = {
            order: '-fields.publicationDate',
            skip: Math.floor((queryParams.page - 1) * LIMIT),
            limit: LIMIT
        };
        return Ember.RSVP.hash({
            featured: this.get('store').query('featuredsale', { 'fields.featured': true }),
            notFeatured: this.get('store').query('featuredsale', { 'fields.featured': false }),
            // sales: this.get('store').query('sale', { 'fields.order': 1, 'fields.test': 2 }),
            sales: this.get('store').query('sale', { 'order': 'fields.order', }).then(function (list) {
                let first = list.filter(element => {
                    return element.get('order') == 1 || element.get('order') == 2;
                });
                let second = list.filter(element => {
                    return element.get('order') == 3 || element.get('order') == 4;
                });
                let third = list.filter(element => {
                    return element.get('order') == 5 || element.get('order') == 6;
                });
                return {
                    first: first,
                    second: second,
                    third: third

                };
            }),

            sale: this.get('store').queryRecord('salesPage', { 'fields.slug': 'sale' }),
            content: this.get('store').queryRecord('salesPage', { 'fields.slug': 'sale' }),
            articles: this.get('store').query('exDisplaySale', apiParams)
        });
    },
    setupController(controller, model) {
        this._super(controller, model);
        Ember.run.scheduleOnce('afterRender', function () {
            Ember.$(".animate-logo").addClass('fade-in');
        });
        let meta = model.articles.get('meta');
        controller.set('pageCount', Math.max(1, Math.floor(meta.total / LIMIT)));
    },
    headData: Ember.inject.service(),
    afterModel(model) {
        console.log('modeeel', model.sales);
        set(this, 'headData.title', model.content.get('metaTitle'));
        set(this, 'headData.description', model.content.get('metaDescription'));
        if (model.content.get('metaImage').content) {
            set(this, 'headData.image', model.content.get('metaImage').content.data.file.url);
        }
    }
});
