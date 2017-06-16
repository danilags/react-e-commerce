const express = require('express')
const router = express.Router()
const userCont = require('../controllers/user')

router.get('/', userCont.getAllUser)

router.get('/profile', userCont.findOneUser)

router.post('/', userCont.createUser)

router.put('/:id', userCont.updateUser)

router.delete('/:id', userCont.removeUser)

module.exports = router;