<script setup lang="ts">

</script>

<template>
  <div>
    <nav>
      <router-link to="/">All Leads</router-link> |
      <router-link to="/new">New Lead</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
