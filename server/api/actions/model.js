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
const get_actions = async () =>
    //Returns: array of all actions
    await db('actions')
const get_action = async id => {
    //Returns: object action with array of contexts
    const action = await db('actions').where({id})
    const contexts = await db('action_contexts')
    return {...action[0], contexts: contexts}
}
//U
//D

module.exports = {add, get_actions, get_action}