<template>
    <div>
        <header>
            <h1>FriendList</h1>
        </header>
        <new-friend @add-contact="addNewContact"></new-friend>
        <ul>
            <friend-contact v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            @toggle-favourite="toggleFriendStatus"
            @delete-friend="deleteFriend"
            :is-favourite="friend.fav"
            ></friend-contact>
            <!-- <friend-contact name="Sowmya" phone-number="1234567890" email-address="sowmya@gmail.com"></friend-contact>
            <friend-contact name="Sree" phone-number="1234567890" email-address="sree@gmail.com"></friend-contact> -->
        </ul>
    </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

export default {
  components: { FriendContact, NewFriend },
        data() {
            return {
                friends: [
                {
                    id: 'sowmya',
                    name: 'Sowmya',
                    phone: '1234567890',
                    email: 'sowmya@gmail.com',
                    fav: false
                },
                {
                    id: 'sree',
                    name: 'Sree',
                    phone: '1234638648',
                    email: 'sree@gmail.com',
                    fav: false
                },
                {
                    id: 'summ', 
                    name: 'Sumana', 
                    phone: '9896216641', 
                    email: 'summ@gmail.com',
                    fav: true
                }
                ]
            }
        },
        methods: {
            toggleFriendStatus(id) {
                const friendSelected = this.friends.find(friend => friend.id === id);
                friendSelected.fav = !friendSelected.fav
            },
            addNewContact(frndDataObj) {
                const obj = {
                    id: new Date().toISOString,
                    name: frndDataObj.friendName,
                    phone: frndDataObj.friendPhone,
                    email: frndDataObj.friendEmail,
                    fav: false
                }
                this.friends.push(obj);
            },
            deleteFriend(id) {
                const eleIndexToBeDeleted = this.friends.find((ele, index) => {
                    if(ele.id === id) {
                        console.log(ele, index)
                        return index;
                    }
                });
                this.friends.splice(eleIndexToBeDeleted, 1);
            }
        }
    }
</script>
