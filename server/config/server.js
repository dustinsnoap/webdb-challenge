//IMPORTS
const express = require('express')
const server = express()
//middleware
const helmet = require('helmet')
const cors = require('cors')
//routes
const projectRoutes = require('../api/projects/routes')
const actionRoutes = require('../api/actions/routes')

//APPLY MIDDLEWARE
server.use(express.json()) //everything is json
server.use(cors())  //allows communication between apps on the same machine
server.use(helmet())    //sets various http headers to increase security

//APPLY ROUTES
server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

module.exports  = server