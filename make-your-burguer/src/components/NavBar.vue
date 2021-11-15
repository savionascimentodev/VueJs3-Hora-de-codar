<template>
  <div id="nav">
    <router-link to="/" class="logoUrl">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['logo', 'alt']
}
</script>

<style scoped>
#nav {
  background-color: #222;
  box-shadow: -1px 8px 17px 2px rgba(0, 0, 0, 0.5);
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav .logoUrl {
  margin: auto;
  margin-left: 0px;
}

#logo {
  height: 40px;
  width: 40px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: #fff;
}
</style>
