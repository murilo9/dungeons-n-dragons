<template>
  <div id="app">
    <CharactersTable />
  </div>
</template>

<script>
import CharactersTable from './components/CharactersTable.vue'

export default {
  name: 'app',
  components: {
    CharactersTable
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
