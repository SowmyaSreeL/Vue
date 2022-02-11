const app = Vue.createApp({
    data() {
        return {
            userName: 'Sowmya',
            age: 24,
            favNum1: Math.random(),
            imgLink: 'https://www.w3schools.com/html/pic_trulli.jpg',
            inputVal: 'Sowmya Sree Lagishetti'
        }
    },
    methods: {
        favNum2() {
            return Math.random();
        }
    }
}).mount('#assignment')