var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jawad'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jawad-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jawad'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jawad-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jawad'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jawad-production'
  }
};

module.exports = config[env];
