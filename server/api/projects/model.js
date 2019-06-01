//IMPORTS
const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

//C
const add = async project =>
    //Adds a new project to the database
    //Returns: ?
    await db('projects').insert(project)
//R
const get_project = async id => {
    //Retrieves project by it's id
    //Includes: all project fields and a list of all actions relating to that project
    //Returns: project object with array of related actions
    const project = await db('projects').where({id})
    const actions = await db('actions').where('project_id', id)
    return {...project[0], actions: actions}
}
//U
//D

module.exports = {add, get_project}