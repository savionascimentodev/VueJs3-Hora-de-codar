<template>
  <section>
    <NavBar :logo="logoSrc" :alt="appName" />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, Footer },
  data() {
    return {
      logoSrc: '/assets/logo.png',
      appName: 'Make your Burguer'
    }
  }
}
</script>

<style>
* {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100% !important;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
