<template>
    <div class="character">
        <h1>{{character.name}}</h1>
        <div class="details">
            <div class="block">
                <p>{{character.gender}}</p>
                <p>Gênero</p>
            </div>
            <div class="block">
                <p>{{character.age}}</p>
                <p>Idade</p>
            </div>
            <div class="block">
                <p>{{character.race}}</p>
                <p>Raça</p>
            </div>
            <div class="block">
                <p>{{character.class}}</p>
                <p>Classe</p>
            </div>
            <div class="block">
                <p>{{character.alignment}}</p>
                <p>Alinhamento</p>
            </div>
        </div>
        <div class="others">
            <div class="block">
                <p>{{character.level}} Nível</p>

                <p>{{character.xp}} Pontos de Exp.</p>

                <p>{{character.hitDice}} Dado de Vida</p>
            </div>
            <div class="block">
                <p>{{character.proficiency}}</p>
                <p>Bônus de Profic.</p>
                <p>12</p>
                <p>Classe de Armadura</p>
            </div>
        </div>
        <div class="atributes">
            <div class="block">
                <p>{{character.strenght}}</p>
                <p>Força</p>
            </div>
            <div class="block">
                <p>{{character.constitution}}</p>
                <p>Constituição</p>
            </div>
            <div class="block">
                <p>{{character.dexterity}}</p>
                <p>Destreza</p>
            </div>
            <div class="block">
                <p>{{character.inteligence}}</p>
                <p>Inteligência</p>
            </div>
            <div class="block">
                <p>{{character.wisdom}}</p>
                <p>Sabedoria</p>
            </div>
            <div class="block">
                <p>{{character.charisma}}</p>
                <p>Carisma</p>
            </div>
        </div>
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
        .others, .details, .atributes, .important{
            display: flex;
            justify-content: space-around;
            margin-bottom: 1em;
            .block{
                border: 1px solid #444;
            }
        }
        .others{
            .block{
                width: 20%;
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

var props = {
    character: Object
}
export default {
    components: components,
    props: props
}
</script>