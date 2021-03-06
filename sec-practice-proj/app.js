const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the goal',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const num = Math.random();
            if(num < 0.5) {
                return 'Learn Vue';
            }
            else {
                return 'Master Vue'
            }
        }
    }
})
app.mount('#user-goal');