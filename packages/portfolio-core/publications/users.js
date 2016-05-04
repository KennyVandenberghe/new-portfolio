Meteor.publish('user.admin', function(userId) {
  if (!! userId) {
    Portfolio.Users.find({_id: userId, 'profile.role': "admin"});
  }
});
