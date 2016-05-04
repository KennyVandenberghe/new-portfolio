Template.portfolioProjectItem.events({
  'click .edit-project': function(e, tpl) {
    Portfolio.overlay.open('portfolioEditProject', this);
  }
});
