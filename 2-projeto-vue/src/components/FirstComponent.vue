<template>
  <section>
    <h1>Olá Vue</h1>
    <p>Meu nome é: {{ name }}</p>
    <p>Minha profissão: {{ occupation }}</p>
    <MultiplosEventos />
  </section>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'

export default {
  name: 'FirstComponent,',
  components: { MultiplosEventos },
  data() {
    return {
      name: 'Sávio',
      occupation: 'Developer'
    }
  }
}
</script>
