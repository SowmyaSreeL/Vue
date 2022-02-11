Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },

    methods: {
        addGoal() {
            console.log("here")
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app')