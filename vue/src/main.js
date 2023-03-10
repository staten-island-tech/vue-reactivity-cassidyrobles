import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

new VueElement({
    router,
    render: h => h(App)
}).$mount(`#app`)