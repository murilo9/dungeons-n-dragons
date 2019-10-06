const DB = require('../helpers/Db')

exports.read = (charId, next) => {
    var script = "SELECT * FROM tbPersonageItems WHERE charOwner = "+charId
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        var items = []
        results.forEach((result, r) => {
            var item = {
                id: results[r].id, 
                name: results[r].itemName,
                details: results[r].details,
                weight: results[r].weigh,
                charId: results[r].ownerId,
                inUse: results[r].inUse ? true : false,
            }
            console.log(item)
            items.push(item)
        })
        next(items)
    })
}

exports.create = (item, next) => {
    var script = `INSERT INTO tbPersonageItems (itemName, details, weigh, charOwner) `+
    `VALUES ("${item.name}", "${item.details}", ${item.weight}, ${item.ownerId})`
    console.log(script)
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('item criado com sucesso')
            next(true)
        }
    })
}

//Still not used
/*exports.update = (newItem, next) => {
    var script = `UPDATE tbPersonageItems SET `+
    `itemName = "${newItem.name}", details = "${newItem.details}", weigh = ${newItem.weight}, `+
    `inUse = ${newItem.inUse} WHERE id = ${newItem.ownerId}`
    console.log(script)
    next(true)
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('item atualizado com sucesso')
            next(true)
        }
    })
}*/

exports.delete = (itemId, next) => {
    var script = "DELETE FROM tbPersonageItems WHERE id = " + itemId
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('item deletado com sucesso')
            next(true)
        }
    })
}

exports.deleteCharItems = (charId, next) => {
    var script = "DELETE FROM tbPersonageItems WHERE charOwner = " + charId
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('items do personagem deletados com sucesso')
            next(true)
        }
    })
}