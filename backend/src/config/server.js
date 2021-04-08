const port = 3003

const bodyParcer = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParcer.urlencoded({ extended: true}))
server.use(bodyParcer.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server