import ContentfulSerializer from 'ember-data-contentful/serializers/contentful';

export default ContentfulSerializer.extend({
    extractAttributes(modelClass, fieldsHash, objHash) {
        let attributeKey;
        let attributes = {};

        if (objHash.sys.type === 'Error') {
            console.warn(`[Contentful] ${objHash.message}`);
            console.warn(`[Contentful] It is possible that ${objHash.details.type}:${objHash.details.id} is not published, but is linked in this Entry.`);
            return {};
        }

        modelClass.eachAttribute((key) => {
            attributeKey = this.keyForAttribute(key, 'deserialize');
            if (fieldsHash && fieldsHash.hasOwnProperty(attributeKey)) {
                let attributeValue = fieldsHash[attributeKey];
                if (typeof attributeValue === 'object' && objHash.sys.type !== 'Asset' && typeof attributeValue.sys !== 'undefined') {
                    attributeValue = attributeValue.sys.id;
                }
                attributes[key] = attributeValue;
            }
            if (objHash) {
                attributes['contentType'] = objHash.sys.type === 'Asset' ? 'asset' : objHash.sys.contentType.sys.id;
                attributes['createdAt'] = objHash.sys.createdAt;
                attributes['updatedAt'] = objHash.sys.updatedAt;
            }
        });

        return attributes;
    },

    _extractIncludes(store, payload) {
        if(payload && payload.hasOwnProperty('includes') && typeof payload.includes !== 'undefined') {
            let entries = [],
                assets = [];

            if (payload.includes.Entry) {
                entries = payload.includes.Entry.map((item) => {
                    return this.normalize(store.modelFor(item.sys.contentType.sys.id), item).data;
                });
            }

            if (payload.includes.Asset) {
                assets = payload.includes.Asset.map((item) => {
                    return this.normalize(store.modelFor('contentful-asset'), item).data;
                });
            }

            return entries.concat(assets);
        } else {
            return [];
        }
    }

});
