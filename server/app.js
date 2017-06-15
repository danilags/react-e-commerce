const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const index = require('./routes/index')
const user = require('./routes/user')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)
app.use('/users', user)

app.listen(3000, function() {
  console.log("Server Jalan");
})