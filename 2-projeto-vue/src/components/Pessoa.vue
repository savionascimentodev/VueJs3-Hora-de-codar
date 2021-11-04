<template>
  <section>
    <h2>Está é a descrição da pessoa: {{ name }}</h2>
    <Info :email="email" />
  </section>
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'Pessoa',
  components: { Info },
  data() {
    return {
      name: 'Sávio',
      email: 'savionascimentodev@gmail.com'
    }
  }
}
</script>
