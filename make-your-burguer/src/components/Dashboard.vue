<template>
  <div id="burguer-table">
    <div>
      <div id="burguer-table-header">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div class="burguer-table-rows">
      <div class="burguer-table-rows">
        <div class="order-number">
          <div>Jão</div>
          <div>Pão</div>
          <div>Maminha</div>
          <div>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </div>
          <div>
            <select name="status" class="status">
              <option value="">Selecione o status do hamburguer</option>
            </select>
            <button classs="btn-delete">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
<style scoped>
#burguer-table {
}
</style>
