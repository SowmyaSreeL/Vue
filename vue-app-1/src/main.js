import { createApp } from 'vue';
import  App  from './App.vue';
import  FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue'
 
// createApp({App}).mount('#app');
const app = createApp(App);
app.mount('#app');
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);


