<template>
  <section>
    <h1>Olá Vue</h1>
    <p>Meu nome é: {{ name }}</p>
    <p>Minha profissão: {{ occupation }}</p>
  </section>
</template>

<script>
export default {
  name: 'FirstComponent,',
  data() {
    return {
      name: 'Sávio',
      occupation: 'Developer'
    }
  }
}
</script>
