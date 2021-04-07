const port = 3003

const bodyParcer = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParcer.urlencoded({ extended: true}))
server.use(bodyParcer.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

