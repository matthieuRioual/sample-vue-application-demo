import { createApp } from 'vue';
import App from './common/primary/app/App.vue';
import router from './router/router';
// jhipster-needle-main-ts-import

// jhipster-needle-main-ts-instanciation

const app = createApp(App);
app.use(router);
// jhipster-needle-main-ts-provider
app.mount('#app');
