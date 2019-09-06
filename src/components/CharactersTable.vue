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

</style>

<script>
import draggable from 'vuedraggable'
import Character from './Character.vue'

var data = () => {
    return {
        characters: [
            {id: 0, name: 'João'}, {id: 1, name: 'Maria'}
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