// All other packages automatically depend on this one

Package.describe({
  summary: "Core Meteor environment",
  internal: true
});

Package.register_extension(
  "js", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "js",
      path: serve_path,
      source_file: source_path,
      where: where
    });
  }
);

Package.register_extension(
  "css", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "css",
      path: serve_path,
      source_file: source_path,
      where: where
    });
  }
);

Package.on_use(function (api, where) {
  api.use('underscore', ['client', 'server']);

  api.add_files('client_environment.js', 'client');
  api.add_files('server_environment.js', 'server');
  api.add_files('helpers.js', ['client', 'server']);
  api.add_files('timers.js', ['client', 'server']);

  // dynamic variables, bindEnvironment
  // XXX move into a separate package?
  api.use('underscore', ['client', 'server']);
  api.add_files('dynamics_browser.js', 'client');
  api.add_files('dynamics_nodejs.js', 'server');
});

Package.on_test(function (api) {
  api.use('tinytest');

  api.add_files('client_environment_test.js', 'client');
  api.add_files('server_environment_test.js', 'server');

  api.add_files('helpers_test.js', ['client', 'server']);
  api.add_files('dynamics_test.js', ['client', 'server']);
});