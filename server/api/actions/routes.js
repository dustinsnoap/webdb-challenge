//IMPORTS
const express = require('express')
const router = express.Router()
const db = require('./model')
//middleware
const {check_fields} = require('./middleware')

//ROUTE: /api/actions

//C
router.post('/', check_fields, async (req, res) => {
    try {
        const action = await db.add(req.body)
        action
        ?   res.status(201).json(action)
        :   res.status(404).json({message: `Action couldn't be added.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/', async (req, res) => {
    //returns all actions in an array
    try {
        const actions = await db.get_actions()
        actions.length > 0
        ?   res.status(200).json(actions)
        :   res.status(404).json({message: `Couldn't find any actions.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:id', async (req, res) => {
    //returns action object with specified id and array of contexts
    try {
        const action = await db.get_action(req.params.id)
        action
        ?   res.status(200).json(action)
        :   res.status(404).json({messgae: `Couldn't find action ${req.params.id}.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router