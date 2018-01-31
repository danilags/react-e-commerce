'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    order_detail: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  });
  // cara lama associate sequelize
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'CustomerId',
      onDelete: 'CASCADE',
      as: 'user_transaction'
    })
  }

  // {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //       Order.belongsTo(models.Product, {foreignKey: 'ProductId'});
  //       // 1 order bisa banyak User
  //       Order.belongsTo(models.User, {foreignKey: 'CustomerId'});
  //     }
  //   }
  // }

  return Order;
};
