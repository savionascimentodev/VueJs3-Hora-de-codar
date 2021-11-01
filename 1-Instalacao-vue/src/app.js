const MyNameApp = {
  data() {
    return {
      name: "",
      age: 20,
      input_name: ""
    }
  },
  methods: {
    submitForm(event) {
      console.log('aqui');
      event.preventDefault();

      console.log(this.input_name);

      this.name = this.input_name
    }
  },
}

Vue.createApp(MyNameApp).mount('#app')