import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('brochure-checkbox', 'Integration | Component | brochure checkbox', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{brochure-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#brochure-checkbox}}
      template block text
    {{/brochure-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
