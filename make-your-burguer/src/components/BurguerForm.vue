<template>
  <div>
    <Message :msg="message" v-show="message" />
    <div>
      <form id="burger-form" @submit="createBurguer">
        <div class="input-container">
          <label for="name"> Nome do cliente: </label>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"
            placeholder="Digite o seu nome"
          />
        </div>
        <div class="input-container">
          <label for="bread"> Escolha o pão: </label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Selecione o seu pão</option>
            <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
              {{ bread.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat"> Escolha a carne do seu burguer: </label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">
              {{ meat.tipo }}
            </option>
          </select>
        </div>
        <div id="options-container" class="input-container">
          <label id="options-title" for="options">
            Selecione os opcionais:
          </label>
          <div
            v-for="option in optionsData"
            :key="option.id"
            class="checkbox-container"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="options"
              :value="option.tipo"
            />
            <span>{{ option.tipo }}</span>
            <br />
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burguer" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'BurguerForm',
  components: {
    Message
  },
  data() {
    return {
      breads: null,
      meats: null,
      optionsData: null,
      name: null,
      bread: null,
      meat: null,
      options: [],
      status: 'Solicitado',
      message: null
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredientes')
      const data = await req.json()

      this.breads = data.paes
      this.meats = data.carnes
      this.optionsData = data.opcionais
    },
    async createBurguer(e) {
      e.preventDefault()

      const data = {
        name: this.name,
        meat: this.meat,
        bread: this.bread,
        options: Array.from(this.options),
        status: 'Solicitado'
      }

      const dataJson = JSON.stringify(data) // Manda como texto para o servidor;
      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
      })

      // Limpar os campos;
      const res = await req.json()
      this.name = ''
      this.meat = ''
      this.bread = ''
      this.options = ''

      // Colocando mensagem de sistema;
      this.message = `Pedido Nº ${res.id} realizado comm sucesso!`

      // Limpar mensagem;
      setTimeout(() => (this.message = ''), 3000)
    }
  },
  mounted() {
    this.getIngredients()
  }
}
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#options-title {
  width: 100%;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  font-weight: bold;
  margin-left: 6px;
}

.submit-btn {
  background: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid rgb(84, 83, 83);
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 20px;
  box-shadow: -1px 4px 17px 1px rgba(0, 0, 0, 0.4);
}

.submit-btn:hover {
  color: rgb(19, 192, 19);
}
</style>
