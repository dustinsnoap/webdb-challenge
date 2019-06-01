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
server.use(express.json())
server.use(cors())
server.use(helmet())

//APPLY ROUTES
server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

module.exports  = server