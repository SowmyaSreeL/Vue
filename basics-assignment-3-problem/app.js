Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        display() {
            if(this.counter < 37) {
                return 'Not there yet'
            }
            else if(this.counter > 37) {
                return 'Too much!'
            }
            else {
                return this.counter;
            }
        }
    },
    watch: {
        display() {
            console.log('Watcher executing...');
            const that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000)
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
}).mount('#assignment')