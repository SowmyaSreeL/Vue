<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goalInp"/>
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <error-alert v-if="inputInvalid">
                <h2>Input is empty, please enter something...</h2>
                <button @click="confirnErr">Okay</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorDialog.vue';

export default {
    components: {
        ErrorAlert
    },  
    data() {
        return {
            inputInvalid: false
        }
    },
    methods: {
        setGoal() {
            const goal = this.$refs.goalInp.value;
            if (goal === '') {
                this.inputInvalid = true;
            } 
        },
        confirnErr() {
            this.inputInvalid = false
        }
    }
}
</script>