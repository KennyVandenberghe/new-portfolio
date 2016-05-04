Package.describe({
  name: 'portfolio-project',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  var c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'portfolio-core',
    'underscore',
    'momentjs:moment',
    'mongo',
    'dburles:collection-helpers@1.0.2',
    'sewdn:collection-behaviours@0.2.0'
  ], cs);

  api.use([
    'ui',
    'templating',
    'kadira:flow-router',
    'rvn:light',
    'rvn:overlay'
  ], c);

  api.addFiles([
    'components/projects.html',
    'components/projects.js',
    'components/projectAdd.html',
    'components/projectAdd.js',
    'components/projectEdit.html',
    'components/projectEdit.js',
    'components/projectItem.html',
    'components/projectItem.js'
  ], c);

  api.addFiles([
    'model.js',
    'methods.js'
  ], cs);

  api.addFiles([
    'publications.js'
  ], s);
});
