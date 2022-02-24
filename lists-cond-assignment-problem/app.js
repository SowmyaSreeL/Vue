const app = Vue.createApp({
    data() {
      return { 
        tasks: [],
        enteredTask: '',
        status: true
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTask);
        this.enteredTask = ''
      },
      toggle() {
        this.status = !this.status;
      }
    },
  });
  
  app.mount('#assignment');