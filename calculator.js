var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 1,
      number2: 2,
      number3: 3,
      sum: 0,
      product: 0
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    computeProduct: function () {
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    }
  }
};

Vue.createApp(App).mount('#app');