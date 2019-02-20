import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('share-kitchen-modal', 'Integration | Component | share kitchen modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{share-kitchen-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#share-kitchen-modal}}
      template block text
    {{/share-kitchen-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
