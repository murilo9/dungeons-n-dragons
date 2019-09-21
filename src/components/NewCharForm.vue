<template>
    <modal name="new-char-modal" height="564" width="300">
        <div class="header">
            Criar Personagem
        </div>
        <form class="form">
            <p class="field">
                <span>Nome</span>
                <input type="text" v-model="form.name">
            </p>
            <div class="field">
                <div class="block">
                    <span>Gênero</span>
                    <select v-model="form.gender">
                        <option 
                        :value="gender.value"
                        v-for="gender in genders" 
                        :key="gender.value">
                            {{gender.label}}
                        </option>
                    </select>
                </div>
                <div class="block">
                    <span>Idade</span>
                    <input type="text" v-model="form.age" class="small">
                </div>
            </div>
            <p class="field">
                <span>Natureza</span>
                <select v-model="form.alignment">
                    <option
                    :value="alignment.value"
                    v-for="alignment in aligments"
                    :key="alignment.value">
                        {{alignment.label}}
                    </option>
                </select>
            </p>
            <p class="field">
                <span>Raça</span>
                <input type="text" v-model="form.race">
            </p>
            <p class="field">
                <span>Class</span>
                <input type="text" v-model="form.class">
            </p>
            <div class="field">
                <div class="block">
                    <span>Nível</span>
                    <input type="text" v-model="form.level" class="small">
                </div>
                <div class="block">
                    <span>Exp.</span>
                    <input type="text" v-model="form.xp" class="small">
                </div>
            </div>
            <p class="field">
                <span>Dado de Vida</span>
                <input type="text" v-model="form.hitDice" class="small">
            </p>
            <p class="field">
                <span>Bônus de Proficiência</span>
                <input type="text" v-model="form.proficiency" class="small">
            </p>
            <p class="field">
                <span>Força</span>
                <input type="text" v-model="form.strenght" class="small">
            </p>
            <p class="field">
                <span>Constituição</span>
                <input type="text" v-model="form.constitution" class="small">
            </p>
            <p class="field">
                <span>Destreza</span>
                <input type="text" v-model="form.dexterity" class="small">
            </p>
            <p class="field">
                <span>Inteligência</span>
                <input type="text" v-model="form.inteligence" class="small">
            </p>
            <p class="field">
                <span>Sabedoria</span>
                <input type="text" v-model="form.wisdom" class="small">
            </p>
            <p class="field">
                <span>Carisma</span>
                <input type="text" v-model="form.charisma" class="small">
            </p>
        </form>
        <div class="buttons">
            <a href='#' onclick="event.preventDefault()" @click="close">
                <span>Cancelar</span>
            </a>
            <a href='#' onclick="event.preventDefault()" @click="createChar">
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
                width: 30%;
                margin-right: 4em;
            }
            input[type=text]{
                width: 8em;
                &.small{
                    text-align: center;
                    width: 3em;
                }
            }
            .block{
                input{
                    margin: 0;
                }
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
import axios from 'axios'

var data = () => {
    return {
        genders: [
            {label: 'Masculino', value: 0},
            {label: 'Feminino', value: 1},
            {label: 'Não-binário', value: 2}
        ],
        aligments: [
            {value: 0, label: 'Leal e Bom'},
            {value: 1, label: 'Neutro e Bom'},
            {value: 2, label: 'Caótico e Bom'},
            {value: 3, label: 'Leal e Neutro'},
            {value: 4, label: 'Neutro'},
            {value: 5, label: 'Caótico e Neutro'},
            {value: 6, label: 'Leal e Mau'},
            {value: 7, label: 'Neutro e Mau'},
            {value: 8, label: 'Caótico e Mau'}
        ],
        form: {
            name: '',
            gender: 0,
            age: 21,
            alignment: 0,
            race: '',
            class: '',
            level: 1,
            xp: 0,
            hitDice: 8,
            proficiency: 2,
            strenght: 10,
            constitution: 10,
            dexterity: 10,
            inteligence: 10,
            wisdom: 10,
            charisma: 10,
        }
    }
}

var methods = {
    createChar(){
        this.$emit('create-char', this.form)
    },
    close(){
        this.$modal.hide('new-char-modal')
    }
}

export default {
    data: data,
    methods: methods
}
</script>