//IMPORTS
const express = require('express')
const router = express.Router()
const db = require('./model')
//middleware
const {check_fields} = require('./middleware')

//ROUTE: /api/projects

//C
router.post('/', async (req, res) => {
    //returns all projects
    try {
        const project = await db.add(req.body)
        project
        ?   res.status(201).json(project)
        :   res.status(404).json({message: `Project couldn't be added.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/:id', check_fields, async (req, res) => {
    //returns project object with specified id with related actions
    try {
        const project = await db.get_project(req.params.id)
        project
        ?   res.status(200).json(project)
        :   res.status(404).json({message: `Couldn't find project ${req.params.id}.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router