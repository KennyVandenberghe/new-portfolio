Template.portfolioProjects.onCreated(function() {
  this.subscribe('allProjects');
  this.subscribe('user.admin', Meteor.userId());
});

Template.portfolioProjects.helpers({
  projects: function() {
    return Portfolio.Projects.find({}, {sort: {createdAt: 1}}).fetch();
  }
});

Template.portfolioProjects.events({
  'click .open-overlay': function(e, tpl) {
    Portfolio.overlay.open('portfolioAddProject')
  }
});
