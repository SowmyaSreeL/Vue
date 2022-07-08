import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/BaseCard.vue';
import BaseButton from './components/BaseButton.vue';
import ErrorDialog from './components/ErrorDialog.vue'

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('error-dialog', ErrorDialog);
app.mount('#app');
