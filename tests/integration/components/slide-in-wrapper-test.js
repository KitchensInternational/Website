import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-in-wrapper', 'Integration | Component | slide in wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slide-in-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slide-in-wrapper}}
      template block text
    {{/slide-in-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
