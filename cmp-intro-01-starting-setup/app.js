const app = Vue.createApp({
    data() {
        return {

            friends: [
                {
                    id: 'sowmya', name: 'Sowmya', phone: '1234567890', email: 'sowmya@gmail.com'
                },
                {
                    id: 'sree', name: 'Sree', phone: '1234638648', email: 'sree@gmail.com'
                },
                {
                    id: 'summ', name: 'Sumana', phone: '9896216641', email: 'summ@gmail.com'
                }
            ]
        }
    }
})
app.component('friend-contact', {
    template: `<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
  data() {
      return {
        detailsVisible: false,
        friend: {
            id: 'sowmya', name: 'Sowmya', phone: '1234567890', email: 'sowmya@gmail.com'
        }
      }
  },
  methods: {
    toggleDetails() {
        this.detailsVisible = !this.detailsVisible
    }
  }
})
app.mount('#app');