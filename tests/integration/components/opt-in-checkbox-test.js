import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opt-in-checkbox', 'Integration | Component | opt in checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{opt-in-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#opt-in-checkbox}}
      template block text
    {{/opt-in-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
