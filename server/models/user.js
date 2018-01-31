'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'CustomerId',
      onDelete: 'CASCADE',
      as: 'user_transaction'
    });
  }

  return User;
};
