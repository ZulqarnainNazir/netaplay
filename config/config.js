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
    db: 'postgres://admin12:admin@localhost:5432/netplay'
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
    db: 'postgres://avelflypvnkmbk:ee184873cbb88bcca73233620cbb5147b7684b3dd1f8e9e0cf333ac7cc224d49@ec2-54-243-252-91.compute-1.amazonaws.com:5432/d9f267t1b1384v'
  }
};

module.exports = config[env];
