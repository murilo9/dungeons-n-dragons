<template>
    <div class="players-table">
        <div class="menu">
            <a href='#' onclick="event.preventDefault()" @click="openNewCharForm">
                Criar Personagem
            </a>
        </div>
        <draggable id="character-list" v-model="characters" @start="drag=true" @end="drag=false">
            <Character 
            v-for="character in characters" 
            :key="character.id" 
            :characterData="character"
            @delete-char="deleteChar"
            @save-char="saveChar"/>
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
    #character-list{
        display: flex;
        justify-content: center;
        align-items: baseline;
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
            this.characters = response.data
        })
        .catch((error) => {
            alert("Erro ao carregar personagem: "+error)
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
    },
    saveChar(character){
        axios.put('http://localhost:8888/character', {
            char: character
        })
        .then((response) => {
            this.loadChars()
            alert('Personagem salvo')
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