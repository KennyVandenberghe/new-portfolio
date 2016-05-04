Meteor.publish('allProjects', function() {
  return Portfolio.Projects.find();
});
