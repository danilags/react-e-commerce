const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const index = require('./routes/index')
const user = require('./routes/user')
const product = require('./routes/product')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)
app.use('/users', user)
app.use('/products', product)

app.listen(3000, function() {
  console.log("Server Jalan on port 3000");
})