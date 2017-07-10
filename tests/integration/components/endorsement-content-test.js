import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('endorsement-content', 'Integration | Component | endorsement content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{endorsement-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#endorsement-content}}
      template block text
    {{/endorsement-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
