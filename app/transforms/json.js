import DS from 'ember-data';

export default DS.Transform.extend({
    deserialize(serialized) {
        return { lat: serialized.lat, lng: serialized.lon }; // google map format
    },

    serialize(deserialized) {
        return { lat: deserialized.lat, lon: deserialized.lng }; // contentful format
    }
});
