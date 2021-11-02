<template>
  <img :src="avatar" :alt="description" />
</template>
<script>
export default {
  name: 'Picture',
  data() {
    return {
      avatar: '../assets/logo.png',
      description: 'Avatar de Sávio'
    }
  }
}
</script>
