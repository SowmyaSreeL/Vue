const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      return this.counter++;
    },
    removeCounter() {
      return this.counter--;
    }
  }
});
app.mount('#events');

const app2 = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    }
  },
  methods: {
    boxSelected(box) {
      if(box === 'A') {
        this.boxASelected = !this.boxASelected;
      }
      else if(box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      }
      else {
        this.boxCSelected = !this.boxBSelected;
      }
    }
  }
})

app2.mount('#styling');
