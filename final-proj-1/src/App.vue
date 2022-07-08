<template>
    <div>
        <the-header></the-header>
        <all-resources></all-resources>
    </div>
</template>

<script>
import AllResources from './components/AllResources.vue';
import TheHeader from './components/TheHeader.vue';
export default {
    components: {
        TheHeader,
        AllResources
    },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>