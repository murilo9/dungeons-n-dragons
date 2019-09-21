<template>
    <div class="item-list">
        <p class="title">
            <a href='' onclick='event.preventDefault()' @click="openCreateItemForm">
                <i class="plus icon"></i> Adicionar Item
            </a>
        </p>
        <div class="list">
            <p v-for="item in items" :key="item.id" class="item" 
            :class="item.id == selectedItem.id ? 'selected' : ''">
                <a href='' onclick='event.preventDefault()'
                 @click="swapItemUse(item)"
                 class="use-button">
                    <i :class="item.inUse ? 'circle check outline icon' : 'circle outline icon'"></i>
                </a>
                <a href='' onclick='event.preventDefault()' 
                @click="selectItem(item)"
                class="name">
                    <span>{{item.name}}</span>
                    <span>{{item.weight}} kg</span>
                </a>
                <a href='' onclick='event.preventDefault()'
                 @click="deleteItem(item)"
                 class="use-button">
                    <i class="trash outline icon"></i>
                </a>
            </p>
        </div>
        <textarea class="details" v-model="selectedItem.details"></textarea>

        <!-- MODALS -->
        <NewItemForm @create-item="createItem"/>
    </div>
</template>

<style lang="scss" scoped>
i{
    margin: 0;
}
.item-list{
    .title{
        margin-bottom: 0.5em;
        text-align: center;
        a{
            width: 10%;
            color: #444;
            i{
                font-size: 10pt;
            }
        }
    }
    .list{
        border: 1px solid #6b2f39;
        background: white;
        height: 100px;
        font-size: 7pt;
        overflow-y: auto;
        margin-right: 2%;
        width: 50%;
        display: inline-block;
        p{
            text-align: left;
            overflow: hidden;
            margin: 0;
            &.selected{
                background: #ace;
            }
            .use-button{
                padding: 2px;
            }
            a{
                color: #444;
                display: inline-block;
                &.name{
                    width: 80%;
                    display: inline-flex;
                    justify-content: space-between;
                }
                &.use-button{
                    width: 10%;
                }
                &.delete-button{
                    width: 10%;
                }
            }
        }
    }
    .details{
        width: 48%;
        height: 10em;
        background: #ddd;
        resize: none;
        outline: none;
        font-size: 7pt;
        height: 100px;
    }
}
</style>

<script>
import axios from 'axios'
import NewItemForm from './NewItemForm.vue'

var props = {
    charId: Number
}

var data = () => {
    return{
        items: [],
        selectedItem: {}
    }
}

var methods = {
    openCreateItemForm(){
        this.$modal.show('new-item-modal', {charId: this.charId})
    },
    createItem(item){
        axios.post('http://localhost:8888/item', {
            item: item
        })
        .then((response) => {
            this.$modal.hide('new-item-modal')
            this.loadItems()
        })
        .catch((error) => {
            alert(error)
        })
    },
    deleteItem(item){
        if(confirm('Deseja mesmo excluir este item?'))
            axios.delete('http://localhost:8888/item/'+item.id)
            .then((response) => {
                this.loadItems()
            })
            .catch((error) => {
                alert(error)
            })
    },
    selectItem(item){
        if(this.selectedItem.id == item.id)
            this.selectedItem = {}
        else
            this.selectedItem = item
    },
    swapItemUse(item){
        item.inUse = !item.inUse
    },
    loadItems(){
        axios.get('http://localhost:8888/item/'+this.charId)
        .then((response) => {
            if(response.data.length){
                this.items = response.data
            }
        })
        .catch((error) => {
            alert("Erro ao carregar itens: "+error)
        })
    }
}

var components = {
    NewItemForm
}

export default {
    data: data,
    props: props,
    methods: methods,
    components: components,
    mounted(){
        this.loadItems()
    }
}
</script>