const DB = require('../helpers/Db.js')
const Item = require('./Item.js')
const Spell = require('./Spell.js')

exports.read = (next) => {
    var script = "SELECT * FROM tbPersonages"
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        var chars = []
        results.forEach((result, r) => {
            var character = {
                id: results[r].id, 
                name: results[r].charName,
                gender: results[r].gender,
                alignment: results[r].alignment,
                age: results[r].age,
                race: results[r].race,
                class: results[r].class,
                level: results[r].lvl,
                xp: results[r].xp,
                hitDice: results[r].hitDice,
                proficiency: results[r].proficiency,
                strenght: results[r].strenght,
                constitution: results[r].constitution,
                dexterity: results[r].dexterity,
                inteligence: results[r].inteligence,
                wisdom: results[r].wisdom,
                charisma: results[r].charisma,
                spellSlots: [
                    results[r].spellSlot1,
                    results[r].spellSlot2,
                    results[r].spellSlot3,
                    results[r].spellSlot4,
                    results[r].spellSlot5,
                    results[r].spellSlot6,
                    results[r].spellSlot7,
                    results[r].spellSlot8,
                    results[r].spellSlot9,
                ]
            }
            console.log(character)
            chars.push(character)
        })
        next(chars)
    })
}

exports.create = (char, next) => {
    var script = `INSERT INTO tbPersonages (charname, gender, alignment, age, race, class, `+
    `lvl, xp, hitDice, proficiency, strenght, constitution, dexterity, inteligence, wisdom, charisma, `+
    `spellSLots1, spellSLots2, spellSLots3, spellSLots4, spellSLots5, `+
    `spellSLots6, spellSLots7, spellSLots8, spellSLots9)`+
    `VALUES ("${char.name}", ${char.gender}, ${char.alignment}, ${char.age}, "${char.race}", `+
    `"${char.class}", ${char.level}, ${char.xp}, ${char.hitDice}, ${char.proficiency}, `+
    `${char.strenght}, ${char.constitution}, ${char.dexterity}, ${char.inteligence}, `+
    `${char.wisdom}, ${char.charisma}, ${char.spellSlots[0]}, ${char.spellSlots[1]}, `+
    `${char.spellSlots[2]}, ${char.spellSlots[3]}, ${char.spellSlots[4]}, ${char.spellSlots[5]}, `+
    `${char.spellSlots[6]}, ${char.spellSlots[7]}, ${char.spellSlots[8]})`
    console.log(script)
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('personagem criado com sucesso')
            next(true)
        }
    })
}

exports.update = (char, next) => {
    var script = `UPDATE tbPersonages SET `+
    `charName = "${char.name}", gender = ${char.gender}, alignment = ${char.alignment}, `+
    `age = ${char.age}, race = "${char.race}", class = "${char.class}", lvl = ${char.level}, `+
    `xp = ${char.xp}, hitDice = ${char.hitDice}, proficiency = ${char.proficiency}, `+
    `strenght = ${char.strenght}, constitution = ${char.constitution}, dexterity = ${char.dexterity}, `+
    `inteligence = ${char.inteligence}, wisdom = ${char.wisdom}, charisma = ${char.charisma}, `+
    `spellSlot1 = ${char.spellSlots[0]}, spellSlot2 = ${char.spellSlots[1]}, `+
    `spellSlot3 = ${char.spellSlots[2]}, spellSlot4 = ${char.spellSlots[3]}, `+
    `spellSlot5 = ${char.spellSlots[4]}, spellSlot6 = ${char.spellSlots[5]}, `+
    `spellSlot7 = ${char.spellSlots[6]}, spellSlot8 = ${char.spellSlots[7]}, `+
    `spellSlot9 = ${char.spellSlots[8]} `+
    `WHERE id = ${char.id}`
    console.log(script)
    next(true)
    DB.con().query(script, (err, results, fields) => {
        if(err){
            console.log(err)
            next(false)
        }
        else{
            console.log('personagem atualizado com sucesso')
            next(true)
        }
    })
}

exports.delete = (charId, next) => {
    Item.deleteCharItems(charId, (deletedItems) => {     //Delete character items first
        if(deletedItems)
            Spell.deleteCharSpells(charId, (deletedSpells) => {
                //Finally, delete character:
                if(deletedSpells){
                    var script = "DELETE FROM tbPersonages WHERE id = " + charId
                    DB.con().query(script, (err, results, fields) => {
                        if(err){
                            console.log(err)
                            next(false)
                        }
                        else{
                            console.log('personagem deletado com sucesso')
                            next(true)
                        }
                    })
                }
                else{
                    console.log('abortando')
                    next(false)
                }
            })
        else{
            console.log('abortando')
            next(false)
        }
    })
}