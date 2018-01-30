'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserProduct = sequelize.define('UserProduct', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UserProduct.belongsTo(models.User);
      }
    }
  });
  return UserProduct;
};
