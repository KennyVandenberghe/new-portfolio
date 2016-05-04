Package.describe({
  name: 'portfolio-app-ui',
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
    'ui',
    'templating',
    'rvn:light',
    'rvn:overlay'
  ], c);

  api.use([
    'portfolio-core'
  ], cs);

  api.addFiles([
    'client.js',
    'components/home.html',
    'components/home.js',
    'components/navigation.html',
    'components/navigation.js',
    'components/imageBanner.html',
    'components/imageBanner.js',
    'components/contact.html',
    'components/contact.js',
    'components/about.html',
    'components/about.js'
  ], c);

  api.export('Portfolio');
});
