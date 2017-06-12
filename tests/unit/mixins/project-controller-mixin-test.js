import Ember from 'ember';
import ProjectControllerMixinMixin from 'kitchens-international/mixins/project-controller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | project controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ProjectControllerMixinObject = Ember.Object.extend(ProjectControllerMixinMixin);
  let subject = ProjectControllerMixinObject.create();
  assert.ok(subject);
});
