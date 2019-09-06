<template>
    <div class="players-table">
        <draggable v-model="characters" @start="drag=true" @end="drag=false">
            <Character 
            v-for="character in characters" 
            :key="character.id" 
            :character="character"/>
        </draggable>
    </div>
</template>

<style lang="scss" scoped>
    draggable{
        display: contents;
    }
</style>

<script>
import draggable from 'vuedraggable'
import Character from './Character.vue'

var data = () => {
    return {
        characters: [
            {
                id: 0, 
                name: 'João',
                gender: 0,
                alignment: 2,
                age: 21,
                race: 'Humano',
                class: 'Ladino',
                level: 1,
                xp: 110,
                hitDice: 6,
                proficiency: 2,
                strenght: 10,
                constitution: 15,
                dexterity: 16,
                inteligence: 14,
                wisdom: 9,
                charisma: 13
            }
        ]
    }
}

var components = {
    draggable,
    Character
}

export default {
    data: data,
    components: components
}
</script>