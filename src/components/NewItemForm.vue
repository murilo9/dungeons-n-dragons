<template>
    <modal name="new-item-modal" height="300" width="300" @before-open="beforeOpen">
        <div class="header">
            Adicionar Item
        </div>
        <form class="form">
            <p class="field">
                <span>Nome</span>
                <input type="text" v-model="form.name">
            </p>
            <p class="field">
                Descrição
            </p>
            <div class="textarea-wrapper">
                <textarea v-model="form.details" rows="6"></textarea>
            </div>
            <p class="field">
                <span>Peso(kg)</span>
                <input type="text" class="small" v-model="form.weight">
            </p>
        </form>
        <div class="buttons">
            <a href='#' onclick="event.preventDefault()" @click="close">
                <span>Cancelar</span>
            </a>
            <a href='#' onclick="event.preventDefault()" @click="createItem">
                <span>Criar</span>
            </a>
        </div>
    </modal>
</template>

<style lang="scss" scoped>
    .header{
        background: #6b2f39;
        color: white;
        padding: 0.5em;
        text-align: center;
        font-weight: bold;
        font-size: 10pt;
        border-bottom: 1px solid gray;
    }
    form{
        margin: 1em 0;
        .field{
            display: flex;
            justify-content: center;
            margin-bottom: 0.8em;
            span{
                width: 40%;
                text-align: right;
                padding-right: 1em;
                padding-left: 2em;
                padding-top: 0.5em;
            }
            input{
                width: 50%;
                margin-right: 4em;
                &.small{
                    text-align: center;
                    width: 3em;
                }
            }
        }
        .textarea-wrapper{
            display: flex;
            justify-content: center;
            margin-bottom: 1em;
            textarea{
                width: 80%;
            }
        }
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        padding: 0 1em;
        a{
            font-weight: bold;
            text-decoration: none;
            color: #6b2f39;
            padding: 0 1em;
            border: 1px solid #6b2f39;
            span{
                vertical-align: sub;
            }
        }
    }
</style>

<script>
var data = () => {
    return {
        form: {
            name: '',
            details: '',
            weight: '0',
            ownerId: ''
        }
    }
}

var methods = {
    beforeOpen(data){
        this.form.ownerId = data.params.charId
    },
    close(){
        this.$modal.hide('new-item-modal')
    },
    createItem(){
        if(this.form.name != '' && this.form.weight != ''){
            this.$emit('create-item', this.form)
        }
        else
            alert('Preencha os dados corretamente')
    }
}
export default {
    methods: methods,
    data: data
}
</script>