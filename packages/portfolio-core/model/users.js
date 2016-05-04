Users = Meteor.users;

Users.allow(Portfolio.Model.defaultAllow);

Portfolio.registerNamespace('user', Users);

CollectionBehaviours.extendCollectionInstance(Users);

Portfolio.Model.User = {
  isAdmin: function() {
    if (this.profile.role === 'admin') {
      return true;
    }
    return false;
  }
};

Users.helpers(Portfolio.Model.User);

_.extend(Users, {
  findById: function(userId) {
    return Users.find({ _id: userId });
  },
  findOneById: function(userId) {
    return Users.findOne({ _id: userId });
  }
});

Portfolio.Users = Users;
