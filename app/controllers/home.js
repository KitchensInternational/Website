import Ember from 'ember';

export default Ember.Controller.extend({
    images: [
        Ember.Object.create({
            url: '/assets/images/ki-carousel-0001.jpg',
            title: ''
        }),
        Ember.Object.create({
            url: '/assets/images/ki-carousel-0002.jpg',
            title: ''
        }),
        Ember.Object.create({
            url: '/assets/images/ki-carousel-0003.jpg',
            title: ''
        }),
        Ember.Object.create({
            url: '/assets/images/ki-carousel-0004.jpg',
            title: ''
        }),
        Ember.Object.create({
            url: '/assets/images/ki-carousel-0005.jpg',
            title: ''
        }),
    ],
    stores: [
        Ember.Object.create({
            town: 'Aberdeen',
            name: null,
            address: 'Denmore Road, Bridge of Don, Aberdeen',
            postcode: 'AB23 8JW',
            telephone: '0122 482 4300',
            location: {
                lat: 57.1962574,
                lng: -2.0961151
            }
        }),
        Ember.Object.create({
            town: 'Broxburn',
            name: null,
            address: '11 Youngs Road East, Mains Indusrial Estate, Broxburn',
            postcode: 'EH52 5LY',
            telephone: '0150 686 2780',
            location: {
                lat: 55.9414254,
                lng: -3.4551249
            }
        }),
        Ember.Object.create({
            town: 'Edinburgh',
            name: 'Dundas',
            address: '117 Dundas Street, Edinburgh',
            postcode: 'EH3 5EF',
            telephone: '0131 523 0477',
            location: {
                lat: 55.9604924,
                lng: -3.2024972
            }
        }),
        Ember.Object.create({
            town: 'Edinburgh',
            name: 'Westfield',
            address: '24 Westfield Road, Murrayfield, Edinburgh',
            postcode: 'EH11 2QB',
            telephone: '0131 337 3434',
            location: {
                lat: 55.9396122,
                lng: -3.2431527
            }
        }),
        Ember.Object.create({
            town: 'Glasgow',
            name: null,
            address: '220 Great Western Road, Glasgow',
            postcode: 'G4 9EJ',
            telephone: '0141 404 7744',
            location: {
                lat: 55.8725868,
                lng: -4.2747069
            }
        }),
        Ember.Object.create({
            town: 'Tillicoultry',
            name: null,
            address: '76 Moss Road, Tillicoultry',
            postcode: 'FK13 6NS',
            telephone: '0125 923 7010',
            location: {
                lat: 56.1489967,
                lng: -3.7396832
            }
        })
    ]
});
