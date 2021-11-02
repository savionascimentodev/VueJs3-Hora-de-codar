<template>
  <section>
    <p v-if="isWorking">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de trabalho</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>Vue</li>
      <li>MySql</li>
    </ul>
    <div>
      <button @click="showEmailClick">Mostrar e-mail</button>
    </div>
    <p v-show="showEmail">Mande uma mensagem para: {{ email }}</p>
    <p>
      Para acessar meu portfólio
      <a v-bind:href="meuLink" target="_blank">basta clicar aqui</a>
    </p>
    <Picture />
  </section>
</template>

<script>
import Picture from './Picture.vue'

export default {
  name: 'Info',
  components: { Picture },
  data() {
    return {
      isWorking: true,
      showEmail: false,
      email: 'savionascimentodev@gmail.com',
      meuLink: 'https://github.com/savionascimentodev'
    }
  },
  methods: {
    showEmailClick() {
      this.showEmail = !this.showEmail
    }
  }
}
</script>
