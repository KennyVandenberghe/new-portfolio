Template.portfolioAddProject.events({
  'click .add-project': function(e, tpl) {
    var title = $('#project-title').val(),
        description = $('#project-description').val();

    if (!! title && !! description) {
      Meteor.call('portfolio.project.insert', title, description);
    }
    Portfolio.overlay.close();
  }
});
