Vue.createApp({
    data() {
        return {
            inputVal1: '',
            inputVal2 :''
        }
    },
    methods: {
        showAlert() {
            alert("alert message");
        },
        display1(e) {
            this.inputVal1 = e.target.value;
        },
        display2(e) {
            this.inputVal2 = e.target.value;
        }
    }
}).mount('#assignment')