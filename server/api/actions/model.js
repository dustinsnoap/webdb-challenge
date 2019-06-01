//IMPORTS
const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

//C
const add = async action =>
    //Adds a new action to the database
    //Returns: ?
    await db('actions').insert(action)
//R
const get_action = async () =>
    //Returns: array of actions
    await db('actions')
//U
//D

module.exports = {add, get_action}