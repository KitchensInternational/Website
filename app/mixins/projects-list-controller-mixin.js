import Ember from 'ember';

export default Ember.Mixin.create({
    sortedProjectsOrder: ['ranking:desc'],
    sortedProjects: Ember.computed.sort('model.projects', 'sortedProjectsOrder')
});
