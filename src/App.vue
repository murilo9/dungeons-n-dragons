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
body, html{
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Biryani', sans-serif;
  font-size: 10pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #6b2f39;
  height: 100%;
}
</style>
