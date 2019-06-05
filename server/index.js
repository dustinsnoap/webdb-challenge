//IMPORTS
const server = require('./config/server')

//PORT
const port = 3333

//867-5309
server.listen(port, () =>
    console.log(`\n*** Let's paint some happy little routes on port ${port} ***\n`))