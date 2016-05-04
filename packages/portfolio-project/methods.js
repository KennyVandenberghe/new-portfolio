Meteor.methods({
  'portfolio.project.insert': function(title, description) {
    if(! title || ! description) {
      throw new Meteor.Error(500, 'project needs title and subtitle');
    }
    Projects.insert({
      title: title,
      description: description,
      createdAt: new Date()
    });
  },
  'portfolio.project.update': function(projectId, title, description) {
    if (! projectId) {
      throw new Meteor.Error(500, 'an error has occured');
    }
    if(! title || ! description) {
      throw new Meteor.Error(500, 'project needs title and subtitle');
    }
    Projects.update({
      _id: projectId
    }, {
        $set: {
          title: title,
          description: description,
          updatedAt: new Date()
        }
    });
  },
  'portfolio.project.remove': function(projectId) {
    if (! projectId) {
      throw new Meteor.Error(500, 'an error has occured');
    }
    Projects.remove({
      _id: projectId
    });
  }
});
