Vue.createApp({
    data() {
        return {
            user1: false,
            user2: false,
            toggle: true,
            color: ''
        }
    },
    methods: {
        changeInput(e) {
            if(e.target.value === 'user1') {
                this.user1 = true,
                this.user2 = false
            }
            else if(e.target.value === 'user2') {
                this.user2 = true,
                this.user1 = false
            }
            else {
                this.user2 = false,
                this.user1 = false
            }
        },
        toggleParagraph() {
            this.toggle = !this.toggle
        },
        inputColor(e) {
            this.color = e.target.value
        }
    }
}).mount('#assignment')