Package.describe({
  name: 'perak:human2machine',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'human2machine packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/perak/meteor-human2machine.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("underscore");
  api.addFiles('human2machine/human2machine.js', ['client', 'server']);
  api.export('human2machine', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('perak:human2machine');
  api.addFiles('tests.js');
});
