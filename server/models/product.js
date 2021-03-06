'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.hasMany(models.Order, {through: 'Order'});
        // Product.belongsToMany(models.User, {through: 'Order'})
      }
    }
  });
  return Product;
};
