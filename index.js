/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      text: "",
      count: 0,
      countries: ["Guatemala", "France", "China"],
      newCountry: ""
    };
  },
  methods: {
    doubleCount: function () {
      this.count *= 2;
    },
    addOneToCount: function () {
      this.count++;
    },
    resetCount: function () {
      this.count = 0;
    },
    subtractOneFromCount: function () {
      this.count--;
    },
    resetText: function () {
      this.text = "";
    },
    saveCountry: function () {
      this.countries.push(this.newCountry);
      this.newCountry = "";
    }
  }
};



Vue.createApp(App).mount('#app');
