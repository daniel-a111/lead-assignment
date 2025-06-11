<script>
import { RouterView } from 'vue-router'
import LeadList from '../components/LeadList.vue'

export default {
  name: 'App',
  components: {
    LeadList,
    RouterView
  }
}
</script>

<template>
  <div style="width: 800px; margin: 0 auto;" id="app">
    <LeadList msg="This is Lead List" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
