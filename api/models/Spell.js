const DB = require('../helpers/Db')

exports.read = (charId, next) => {
    var script = "SELECT * FROM tbPersonageSpells WHERE charOwner = "+charId+" ORDER BY spellLevel"
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        var spells = []
        results.forEach((result, r) => {
            var spell = {
                id: results[r].id, 
                name: results[r].spellName,
                details: results[r].details,
                level: results[r].spellLevel,
                charId: results[r].ownerId
            }
            console.log(spell)
            spell.push(spell)
        })
        next(spells)
    })
}

exports.create = (spell, next) => {
    var script = `INSERT INTO tbPersonageSpells (spellName, spellLevel, details, charOwner) `+
    `VALUES ("${spell.name}", ${spell.level}, "${spell.details}", ${spell.ownerId})`
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

//TODO: update spell. Still not to be used.

exports.delete = (spellId, next) => {
    var script = "DELETE FROM tbPersonageSpells WHERE id = " + spellId
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('feitiço deletado com sucesso')
            next(true)
        }
    })
}

exports.deleteCharSpells = (charId, next) => {
    var script = "DELETE FROM tbPersonageSpells WHERE charOwner = " + charId
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('feitiços do personagem deletados com sucesso')
            next(true)
        }
    })
}