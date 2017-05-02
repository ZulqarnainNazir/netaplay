// Example model


module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    password: DataTypes.STRING,
    network: DataTypes.STRING,
    network_type: DataTypes.STRING,
    number:  { type: DataTypes.STRING,  unique: 'compositeIndex'}
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return User;
};

