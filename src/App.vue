<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
html {
  overflow-y: auto;
}
body {
  margin: 0;
  padding: 0;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld';
import './plugins/vuetify'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar,
  },
};
</script>
