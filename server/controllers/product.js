'use strict'

const db = require('../models/')

let findAllProduct = function(req, res) {
  db.Product.findAll()
    .then(function(_products) {
      res.send(_products)
    })
    .catch(function(err) {
      console.log(err.message);
    })
}

let createProduct = function(req, res) {
  db.Product.create({
    name: req.body.name,
    description: req.body.description,
    picture_url: req.body.picture_url,
    stock: req.body.stock,
    price: req.body.price
  }).then(newProduct => {
    res.send({success: true, data: newProduct})
  })
}

let oneProduct = function(req, res) {
  db.Product.findById(req.params.id)
  .then(function(_product) {
    res.send(_product)
  })
  .catch(function(err) {
    console.log(err.message);
  })
}

let updateProduct = function(req, res) {
  db.Product.update({
    name: req.body.name,
    description: req.body.description,
    picture_url: req.body.picture_url,
    stock: req.body.stock,
    price: req.body.price,
    updatedAt: new Date
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send({msg: "Data Success Updated"})
  })
  .catch(function(err) {
    console.log(err.message);
  })
}

let removeProduct = function(req, res) {
  db.Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send({msg: "Product Success Deleted"})
  })
}

module.exports = {
  createProduct,
  findAllProduct,
  oneProduct,
  updateProduct,
  removeProduct
}