Projects = new Mongo.Collection('projects', {

});

Projects.timestampable();

Projects.softRemovable();

Projects.allow(Portfolio.Model.defaultAllow);

Portfolio.registerNamespace('project', Projects);

CollectionBehaviours.extendCollectionInstance(Projects);


Portfolio.Model.Project = {
  getFunction: function() {

  }
};

Projects.helpers(Portfolio.Model.Project);

_.extend(Projects, {
  findById: function(projectId) {
    return Projects.find({ _id: projectId });
  },
  findOneById: function(projectId) {
    return Projects.findOne({ _id: projectId });
  }
});

Portfolio.Projects = Projects;
