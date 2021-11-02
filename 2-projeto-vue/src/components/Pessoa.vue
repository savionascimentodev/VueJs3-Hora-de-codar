<template>
  <section>
    <h2>Está é a descrição da pessoa: {{ name }}</h2>
    <Info />
  </section>
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'Pessoa',
  components: { Info },
  data() {
    return {
      name: 'Sávio'
    }
  }
}
</script>
