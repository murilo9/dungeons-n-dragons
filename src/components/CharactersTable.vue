<template>
    <div class="players-table">
        <div class="menu">
            <a href='#' onclick="event.preventDefault()" @click="openNewCharForm">
                Criar Personagem
            </a>
        </div>
        <draggable v-model="characters" @start="drag=true" @end="drag=false">
            <Character 
            v-for="character in characters" 
            :key="character.id" 
            :character="character"
            @delete-char="deleteChar"/>
        </draggable>
        <NewCharForm @create-char="createChar"/>
    </div>
</template>

<style lang="scss" scoped>
    a{
        text-decoration: none;
    }
    .menu{
        padding: 0.5em;
        font-size: 10pt;
        a{
            color: #ccc;
        }
    }
    draggable{
        display: contents;
    }
</style>

<script>
import draggable from 'vuedraggable'
import Character from './Character.vue'
import NewCharForm from './NewCharForm.vue'
import axios from 'axios'

var data = () => {
    return {
        characters: []
    }
}

var methods = {
    openNewCharForm(){
        this.$modal.show('new-char-modal')
    },
    createChar(char){
        axios.post('http://localhost:8888/character', {
            char: char
        })
        .then((response) => {
            console.log(response.data)
            this.$modal.hide('new-char-modal')
            this.loadChars()
        })
        .catch((error) => {
            alert(error)
        })
    },
    loadChars(){
        axios.get('http://localhost:8888/character')
        .then((response) => {
            console.log(response)
            this.characters = response.data
        })
        .catch((error) => {
            alert(error)
        })
    },
    deleteChar(id){
        axios.delete('http://localhost:8888/character/'+id)
        .then((response) => {
            console.log(response)
            this.loadChars()
        })
        .catch((error) => {
            alert(error)
        })
    }
}

var components = {
    draggable,
    Character,
    NewCharForm
}

export default {
    data: data,
    components: components,
    methods: methods,
    mounted(){
        this.loadChars()
    }
}
</script>