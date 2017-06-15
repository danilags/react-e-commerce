const db = require('../models/')

let getAllUser = function(req, res) {
  db.User.findAll()
    .then(function(_user) {
      res.send({success: true, data: _user})
    })
    .catch(function(err) {
      res.send(err.message)
    })
}

let createUser = function(req, res) {
  // db.User.findOrCreate({where: {email: req.body.email}, defaults: {
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     password: req.body.password,
  //     createdAt: new Date,
  //     updatedAt: new Date
  //   }})
  //   .spread((user, created) => {
  //     console.log("use : ..", user.get());
  //     console.log(" ??? ", created);
  //   })
  // //
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
  removeUser
}