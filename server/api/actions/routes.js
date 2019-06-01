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
    try {
        const actions = await db.get_action()
        actions.length > 0
        ?   res.status(200).json(actions)
        :   res.status(404).json({message: `Couldn't find any actions.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router