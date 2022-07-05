<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop=".....dummy"></slot>
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            goals: ['FInish the course', 'Learnt Vue']
        }
    },
}
</script>
