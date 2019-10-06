const express = require('express'),
    router = express.Router(),
    Spellstem = require('../models/Spell')

router.get('/spell/:char', (req, res) => {
    console.log('GET em spell')
    Spell.read(req.params.char, (spells) => {
        res.send(spells)
    })
})

router.post('/spell', (req, res) => {
    console.log('POST em spell')
    console.log(req.body)
    Item.create(req.body.spell, (success) => {
        if(success)
            res.end()
        else
            res.status(500).send()
    })
})

router.delete('/spell/:id', (req, res) => {
    console.log('DELETE em spell')
    if(!isNaN(req.params.id)){
        Item.delete(req.params.id, (success) => {
            if(success)
                res.end()
            else
                res.status(500).send()
        })
    }
    else{
        res.status(400).send()
    }
})

module.exports = router