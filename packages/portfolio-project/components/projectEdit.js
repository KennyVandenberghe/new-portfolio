Template.portfolioEditProject.events({
  'click .edit-project': function(e, tpl) {
    var title = $('#project-title').val(),
        description = $('#project-description').val();

    if (!! this._id || !! title && !! description) {
      Meteor.call('portfolio.project.update', this._id, title, description);
    }
    Portfolio.overlay.close();
  },
  'click .remove-project': function(e, tpl) {
    if (!! this._id) {
      Meteor.call('portfolio.project.remove', this._id);
    }
    Portfolio.overlay.close();
  }
});
