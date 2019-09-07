<template>
    <div class="character">
        <h1>{{character.name}}</h1>
        <div class="data-1">
            <div class="block">
                <input type="text" v-model="getGender" class="value">
                <p>Gênero</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.age" class="value">
                <p>Idade</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.race" class="value">
                <p>Raça</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.class" class="value">
                <p>Classe</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.alignment" class="value">
                <p>Alinhamento</p>
            </div>
        </div>
        <div class="data-2">
            <div class="block">
                <p class="value">
                    <input type="text" v-model="getHp" class="hp-value">
                    <span>/{{getHp}}</span>
                </p>
                <p>Pontos de Vida</p>
            </div>
            <div class="block">
                <p class="value">{{getAc}}</p>
                <p>Classe de Armadura</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.proficiency" class="value">
                <p>Bônus de Profic.</p>
            </div>
        </div>
        <div class="data-3">
            <div class="block">
                <input type="text" v-model="character.level" class="value">
                <p>Nível</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.xp" class="value">
                <p>Pontos de Exp.</p>
            </div>
            <div class="block">
                <input type="text" v-model="character.hitDice" class="value">
                <p>Dado de Vida</p>
            </div>
        </div>
        <div class="data-4">
            <div class="block">
                <p class="mod">{{getMod(character.strenght)}}</p>
                <input type="text" v-model="character.strenght" class="value">
                <p class="descri">Força</p>
            </div>
            <div class="block">
                <p class="mod">{{getMod(character.constitution)}}</p>
                <input type="text" v-model="character.constitution" class="value">
                <p class="descri">Constituição</p>
            </div>
            <div class="block">
                <p class="mod">{{getMod(character.dexterity)}}</p>
                <input type="text" v-model="character.dexterity" class="value">
                <p class="descri">Destreza</p>
            </div>
            <div class="block">
                <p class="mod">{{getMod(character.inteligence)}}</p>
                <input type="text" v-model="character.inteligence" class="value">
                <p class="descri">Inteligência</p>
            </div>
            <div class="block">
                <p class="mod">{{getMod(character.wisdom)}}</p>
                <input type="text" v-model="character.wisdom" class="value">
                <p class="descri">Sabedoria</p>
            </div>
            <div class="block">
                <p class="mod">{{getMod(character.charisma)}}</p>
                <input type="text" v-model="character.charisma" class="value">
                <p class="descri">Carisma</p>
            </div>
        </div>
        <div class="data-5">
            <div class="items">
                <ItemList />
                <div class="item-description">
            
                </div>
            </div>
            <div class="spells">
                <SpellList />
                <div class="spell-description">

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    p{
        margin: 0
    }
    .character{
        display: inline-block;
        background: #ffffdd;
        border: 3px solid #3f131b;
        border-radius: 1em;
        padding: 1em;
        color: 	#6b2f39;
        h1{
            margin-top: 0;
            margin-bottom: 0.5em;
        }
        .data-1, .data-2, .data-3, .data-4{
            display: flex;
            justify-content: space-around;
            margin-bottom: 1em;
            padding-bottom: 1em;
            border-bottom: 1px solid gray;
            .value{
                width: 3em;
                display: inline-block;
                border: none;
                background: none;
                color: 	#6b2f39;
                font-family: 'Biryani', sans-serif;
            }
        }
        .data-1, .data-3{
            .block{
                text-align: left;
                .value{
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: 1px solid #6b2f39;
                }
            }
        }
        .data-1{
            .block{
                width: 17%;
                .value{
                    width: 5em;
                    font-size: 8pt;
                }
            }
        }
        .data-2{
            flex-direction: row;
            border: none;
            padding: 0;
            .block{
                align-items: center;
                .value{
                    font-size: 10pt;
                    font-weight: bold;
                    text-align: center;
                    margin: 0;
                    width: 5em;
                    .hp-value{
                        font-family: 'Biryani', sans-serif;
                        color: 	#6b2f39;
                        font-weight: bold;
                        text-align: right;
                        font-size: 10pt;
                        border: none;
                        width: 1.5em;
                        background: none;
                    }
                }
            }
        }
        .data-3{
            flex-direction: row;
            .block{
                text-align: center;
                .value{
                    border:none;
                    text-align: center;
                }
            }
        }
        .data-4{
            .block{
                padding: 0.5em;
                .mod{
                    font-size: 10pt;
                    font-weight: bold;
                }
                .value{
                    text-align: center;
                    font-size: 8pt;
                }
                .descri{
                    font-weight: bold;
                }
            }
        }
        .data-5{
            display: flex;
            .items, .spells{
                width: 50%;
            }
            .item-description, .spell-description{
                border: 1px solid gray;
            }
        }
    }
</style>

<script>
import ItemList from './ItemList.vue'
import SpellList from './SpellList.vue'

var components = {
    ItemList,
    SpellList
}

var methods = {
    getMod(att){
        if(att >= 10){
            var mod = (att-10)/2+""
            5.134; 12.5486
            if(mod >= 10)
                return "+"+mod.substring(0, 2)
            else if(mod > 0)
                return "+"+mod.substring(0, 1)
            else
                return "0"
        }
        else{
            if(att == 9 || att == 8) return "-1"
            if(att == 7 || att == 6) return "-2"
            if(att == 5 || att == 4) return "-3"
            if(att == 3 || att == 2) return "-4"
        }
    }
}

var computed = {
    getGender(){
        switch(this.character.gender){
            case 0: return 'M'
            case 1: return 'F'
            case 2: return 'NB'
        }
    },
    getHp(){
        return this.character.level*(
            this.character.hitDice + parseInt(this.getMod(this.character.constitution))
        )
    },
    getAc(){
        return 10+parseInt(this.getMod(this.character.dexterity))
    }
}

var props = {
    character: Object
}
export default {
    methods: methods,
    computed: computed,
    components: components,
    props: props
}
</script>