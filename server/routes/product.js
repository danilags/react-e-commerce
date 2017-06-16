const express = require('express')
const router = express.Router()
const productCont = require('../controllers/product')

router.get('/', productCont.findAllProduct)

router.post('/', productCont.createProduct)

router.get('/:id', productCont.oneProduct)

module.exports = router;