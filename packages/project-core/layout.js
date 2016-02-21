Template.projectLayout.helpers({
  showMask: function(){
    return Session.get('showMask');
  }
});

Template.projectLayout.events({
  'click .logout': function(e, tpl){
    e.preventDefault();
    Meteor.logout();
  }
});
