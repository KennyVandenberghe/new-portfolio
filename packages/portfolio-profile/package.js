Package.describe({
  name: 'portfolio-profile',
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
  api.versionsFrom('1.2.1');
  var c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'mongo'
  ], cs);

  api.use([
    'portfolio-core',
    'underscore',
    'momentjs:moment',
    'dburles:collection-helpers@1.0.2',
    'sewdn:collection-behaviours@0.2.0'
  ], cs);

  api.use([
    'ui',
    'templating',
    'deps',
    'kadira:flow-router',
    'accounts-password',
    'accounts-ui'
  ], c);

  api.addFiles([
    'components/register.html',
    'components/login.html',
    'components/loginContainer.html',
    'components/loginContainer.js'
  ], c);
});
