<template>
    <li>
        <h2>{{name}} {{isFavourite ? '(Favourite)' : ''}}</h2>
        <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} Details</button>
        <button @click="toggleFav">Toggle Favoutire</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong> {{emailAddress}}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
import './styles.css';
export default {
    props: ['id', 'name','phoneNumber', 'emailAddress', 'isFavourite'],
    data() {
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFav() {
            this.$emit('toggle-favourite', this.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }
};
</script>