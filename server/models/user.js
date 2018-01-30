'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.UserProduct, { as: 'Singer' });
        // User.belongsToMany(models.Product, {through: 'UserProduct'})
      }
    }
  });
  return User;
};
