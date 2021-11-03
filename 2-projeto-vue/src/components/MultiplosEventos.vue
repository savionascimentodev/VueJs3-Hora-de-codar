<template>
  <section>
    <button @click="primeiro(e), segundo(e)">Ativar multiplos eventos</button>
    <p>{{ multiplosEventos }}</p>
  </section>
</template>

<script>
export default {
  name: 'MultiplosEventos',
  data() {
    return {
      multiplosEventos: ''
    }
  },
  methods: {
    primeiro(e) {
      this.multiplosEventos = 'Primeiro evento ativado!'
    },
    segundo(e) {
      setTimeout(() => {
        this.multiplosEventos = 'Segundo evento ativado!'
      }, 3000)
    }
  }
}
</script>

<style scoped></style>
