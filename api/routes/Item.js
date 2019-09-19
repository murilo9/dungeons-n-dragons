const express = require('express'),
    router = express.Router(),
    Item = require('../models/Item')

router.get('/item/:char', (req, res) => {
    console.log('GET em item')
    Item.read(req.params.char, (items) => {
        res.send(items)
    })
})

router.post('/item', (req, res) => {
    console.log('POST em item')
    console.log(req.body)
    Item.create(req.body.item, (success) => {
        if(success)
            res.end()
        else
            res.status(500).send()
    })
})

router.put('/item', (req, res) => {
    console.log('PUT em item')
    Item.update(req.body.char, (success) => {
        if(success)
            res.end()
        else
            res.status(500).send()
    })
})

router.delete('/item/:id', (req, res) => {
    console.log('DELETE em item')
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