import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames: ['vote-btn'],
    classNameBindings: ['disabled::disabled'],
    disabled: true,
    didRender() {
        let votedKitchens = JSON.parse(localStorage.getItem('voted'));
        if (votedKitchens && votedKitchens.contains(this.get('name'))) {
            // this.set('disabled', false);
        }
    },
    click(e) {
        let self = this;
        let name = this.get('name');
        let votedKitchens = JSON.parse(localStorage.getItem('voted'));
        var client = window.contentfulManagement.createClient({
            accessToken: 'CFPAT-9c245c5a91670d11a9889eb603e48cdb3c00bd94c9ac2d55aff9cbc28f4eb18f'
        });

        if (!votedKitchens) {
            votedKitchens = [name];
            localStorage.setItem('voted', JSON.stringify(votedKitchens))
            client.getSpace('nma019atkcmp')
                .then((space) => space.getEntries({ 'content_type': 'shared-kitchen', 'fields.title': name })) // you can add more queries as 'key': 'value'
                .then((response) => {
                    let entry = response.items[0];
                    if (!entry.fields.votes) {
                        entry.fields.votes = {
                            'en-GB': 0
                        };
                    }
                    let votes = entry.fields.votes['en-GB'] ? entry.fields.votes['en-GB'] : 0;
                    votes = votes + 1;
                    if (!entry.fields.votes) {
                        entry.fields.votes = {
                            'en-GB': 0
                        };
                    }
                    entry.fields.votes['en-GB'] = votes;
                    // console.log('entry', entry);
                    return entry.update();
                }).then((entry) => {
                    let strn = '#vote-' + entry.fields.name['en-GB'].replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    // console.log('ojsa macko', $(strn));
                    $(strn).html(entry.fields.votes['en-GB']);
                    return entry.publish();
                })
                .catch(console.error)
            // this.set('disabled', false);
        } else {
            if (votedKitchens.contains(name)) {
                alert('already voted');
            } else {
                votedKitchens.push(name);
                localStorage.setItem('voted', JSON.stringify(votedKitchens));
                client.getSpace('nma019atkcmp')
                    .then((space) => space.getEntries({ 'content_type': 'shared-kitchen', 'fields.title': name })) // you can add more queries as 'key': 'value'
                    .then((response) => {
                        let entry = response.items[0];
                        let votes = entry.fields.votes['en-GB'] ? entry.fields.votes['en-GB'] : 0;
                        votes = votes + 1;
                        if (!entry.fields.votes) {
                            entry.fields.votes = {
                                'en-GB': 0
                            };
                        }
                        entry.fields.votes['en-GB'] = votes;
                        // console.log('entry', entry);
                        return entry.update();
                    }).then((entry) => {
                        let strn = '#vote-' + entry.fields.name['en-GB'].replace(/ /g, '-')
                            .replace(/[^\w-]+/g, '')
                        // console.log('ojsa macko', $(strn));
                        $(strn).html(entry.fields.votes['en-GB']);
                        return entry.publish();
                    })
                    .catch(console.error)
            }
        }
    }
});
