<script>
// import { ref, computed } from 'vue'
// import { createMemoryHistory, createRouter } from 'vue-router'
import { RouterView } from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
import LeadList from '../components/LeadList.vue'
// import Counter from './components/Counter.vue'

// const routes = {
//   '/': LeadList,
//   // '/about': About
//   '/users/:id': Counter,
// }

// const currentPath = ref(window.location.hash)

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || LeadList
// })


// const routes = [
//   { path: '/', component: LeadList },
//   { path: '/about', component: Counter },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

export default {
  name: 'App',
  components: {
    // HelloWorld,
    LeadList,
    RouterView
    // Counter,
    // currentView
  }
}
</script>

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div style="width: 800px; margin: 0 auto;" id="app">
    <LeadList msg="This is Lead List" />
    <!-- <component :is="currentView" /> -->
  </div>
  <!-- <router-view></router-view> -->
  <!-- <Counter msg="This is a counter" /> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
