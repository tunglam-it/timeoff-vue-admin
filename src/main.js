import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
import { BootstrapVueNext } from 'bootstrap-vue-next';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
dom.watch();

const app = createApp(App)

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(BootstrapVueNext);
app.mount('#app');
