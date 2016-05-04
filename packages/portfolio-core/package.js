Package.describe({
  name: 'portfolio-core',
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
    'ui',
    'templating',
    'kadira:flow-router',
    'kadira:blaze-layout',
    'session'
  ], c);

  api.use([
    'mongo',
    'underscore',
    'dburles:collection-helpers@1.0.2',
    'sewdn:collection-behaviours@0.2.0'
  ], cs);

  api.addFiles([
    'namespace.js',
    'validators.js',
    'model/users.js',
  ], cs);

  api.addFiles([
    'publications/users.js',
  ], s);

  api.addFiles([
    'layout.html',
    'layout.js',
    'head.html'
  ], c);

  api.addFiles([
    'router.js',
  ], c);

  api.export('Portfolio');
});
