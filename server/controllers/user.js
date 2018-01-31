'use strict'

const db = require('../models/')

const UserModel = require('../models/').User

let getAllUser = function(req, res) {
  db.User.findAll()
    .then(function(_user) {
      res.send({
        data: _user,
        message: 'List of Users',
        status_code: 200
      })
    })
    .catch(function(err) {
      res.send(err.message)
    })
}

let userMakeOrder = function(req, res) {
  db.Order.create({
    CustomerId: req.body.CustomerId,
    ProductId: req.body.ProductId,
    order_detail: req.body.order_detail,
    quantity: req.body.quantity,
    status: req.body.status,
  })
  .then(function(data) {
    res.send({
      data: data,
      message: 'Order success',
      status_code: 200
    })
  })
  .catch(function(err) {
    res.send({
      message: err.message,
      status_code: 404
    })
  })
}

let getAllOrder = function(req, res) {
  db.Order.findAll({
    include: {
      model: db.User,
      as : 'user_transaction'
    }
  })
    .then(function(order) {
      console.log("APA ORDER INI ", order);
      res.send({
        data: order,
        message: 'List of Orders',
        status_code: 200
      })
    })
    .catch(function(err) {
      res.send(err.message)
    })
}

let createUser = function(req, res) {
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    createdAt: new Date,
    updatedAt: new Date
  })
  .then(() => db.User.findOrCreate({where: {email: req.body.email}}))
  .spread((user, created) => {
    res.send(user.get({plain: true}))
    console.log(user.get({plain: true}))
    console.log("ini created : ", created)
  })
}

let updateUser = function(req, res) {
  db.User.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    updatedAt: new Date
  }, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send({msg: "Data success updated!"})
  })
  .catch(function(err) {
    console.log(err.message);
  })
}

let findOneUser = function(req, res) {
  db.User.findById(req.params.id)
    .then(function(_user) {
      res.send({
        data: _user,
        message: 'User Details',
        status_code: 200
      })
    })
    .catch(function(err) {
      console.log(err.message);
    })
}

let removeUser = function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send({msg: "User success deleted!"})
  })
}

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  findOneUser,
  removeUser,
  userMakeOrder,
  getAllOrder,
}
