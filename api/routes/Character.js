const express = require('express'),
    router = express.Router(),
    Character = require('../models/Character')

router.get('/character', (req, res) => {
    console.log('GET em character')
    Character.read((chars) => {
        res.send(chars)
    })
})

router.post('/character', (req, res) => {
    console.log('POST em character')
    console.log(req.body)
    Character.create(req.body.char, (success) => {
        if(success)
            res.end()
        else
            res.status(500).send()
    })
})

router.put('/character', (req, res) => {
    console.log('PUT em character')
    Character.update(req.body.char, (success) => {
        if(success)
            res.end()
        else
            res.status(500).send()
    })
})

router.delete('/character/:id', (req, res) => {
    console.log('POST em character')
    if(!isNaN(req.params.id)){
        Character.delete(req.params.id, (success) => {
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