const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    addHandler() {
      this.counter++;
    },
    reduceHandler() {
      this.counter--;
    },
    reduceByNumHandler(n) {
      this.counter = this.counter - n;
    }
  }
});

app.mount('#events');
