'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    order_detail: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Order.belongsTo(models.Product, {foreignKey: 'ProductId'});
        // 1 order bisa banyak User
        Order.belongsTo(models.User);
      }
    }
  });
  return Order;
};
