<template>
  <div>
    <p>Componente de mensagem</p>
    <div>
      <form id="burger-form">
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
            <option value="integral">Integral</option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat"> Escolha a carne do seu burguer: </label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo de carne</option>
            <option value="maminha">Maminha</option>
          </select>
        </div>
        <div id="options-container" class="input-container">
          <label id="options-title" for="options">
            Selecione os opcionais:
          </label>
          <div class="checkbox-container">
            <input
              type="checkbox"
              name="options"
              v-model="options"
              value="Salame"
            />
            <span>Salame</span>
            <br />
            <input
              type="checkbox"
              name="options"
              v-model="options"
              value="Salame"
            />
            <span>Salame</span>
            <br />
            <input
              type="checkbox"
              name="options"
              v-model="options"
              value="Salame"
            />
            <span>Salame</span>
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
export default {
  name: 'BurguerForm',
  data() {
    return {}
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
