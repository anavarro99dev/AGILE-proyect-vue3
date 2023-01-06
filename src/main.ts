import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";

import "weather-icons/css/weather-icons.min.css";

// TODO: Agregar funcionalidad adicional => tooltips para mostrar la bandera del pais (circle-flags)


import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
