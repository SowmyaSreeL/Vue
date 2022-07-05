<template>
    <form @submit.prevent="submitFriendData">
        <div>
            <label>Name: </label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Phone: </label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        <div>
            <label>Email Address: </label>
            <input type="email" v-model="enteredEmail" />
        </div>
        <button>Add a Friend</button>
    </form>
</template>

<script>
export default {
    emit: ['add-coontact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitFriendData() {
            this.$emit('add-contact', {
                friendName: this.enteredName,
                friendPhone: this.enteredPhone,
                friendEmail: this.enteredEmail
            })
        }
    }
}
</script>