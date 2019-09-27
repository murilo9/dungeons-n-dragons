const DB = require('../helpers/Db')
const Item = require('./Item.js')

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
                charisma: results[r].charisma
            }
            console.log(character)
            chars.push(character)
        })
        next(chars)
    })
}

exports.create = (char, next) => {
    var script = `INSERT INTO tbPersonages (charname, gender, alignment, age, race, class, `+
    `lvl, xp, hitDice, proficiency, strenght, constitution, dexterity, inteligence, wisdom, charisma) `+
    `VALUES ("${char.name}", ${char.gender}, ${char.alignment}, ${char.age}, "${char.race}", `+
    `"${char.class}", ${char.level}, ${char.xp}, ${char.hitDice}, ${char.proficiency}, `+
    `${char.strenght}, ${char.constitution}, ${char.dexterity}, ${char.inteligence}, `+
    `${char.wisdom}, ${char.charisma})`
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
    `inteligence = ${char.inteligence}, wisdom = ${char.wisdom}, charisma = ${char.charisma} `+
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
    var charItems = Item.deleteCharItems(charId, (deleted) => {     //Delete character items first
        //Delete character:
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
    })
}