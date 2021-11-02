<template>
  <section>
    <Header />
    <FirstComponent />
    <LifeCycle />
    <Pessoa />
  </section>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    FirstComponent,
    LifeCycle,
    Pessoa,
    Header
  }
}
</script>
<style>
body {
  background-color: #333;
  color: #fff;
}
a {
  color: red;
}
</style>
