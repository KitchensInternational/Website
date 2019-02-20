import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames: ['vote-btn'],
    classNameBindings: ['disabled::disabled'],
    disabled: true,
    didRender() {
        let votedKitchens = JSON.parse(localStorage.getItem('voted'));
        if (votedKitchens && votedKitchens.contains(this.get('name'))) {
            this.set('disabled', false);
        }
    },
    click() {
        let name = this.get('name');
        let votedKitchens = JSON.parse(localStorage.getItem('voted'));
        var client = window.contentfulManagement.createClient({
            accessToken: 'CFPAT-9c245c5a91670d11a9889eb603e48cdb3c00bd94c9ac2d55aff9cbc28f4eb18f'
        });
        client.getSpace('nma019atkcmp')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.getEntries(data => {
                console.log('data', data);
            }
            ))
            .catch(console.error)
        if (!votedKitchens) {
            votedKitchens = [name];
            localStorage.setItem('voted', JSON.stringify(votedKitchens))
            this.set('disabled', false);
        } else {
            if (votedKitchens.contains(name)) {
                alert('already voted');
            } else {
                console.log('voted');
                votedKitchens.push(name);
                this.set('disabled', false);
                localStorage.setItem('voted', JSON.stringify(votedKitchens))
            }
        }
    }
});
