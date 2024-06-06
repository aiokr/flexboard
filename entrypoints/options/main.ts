import { createApp } from 'vue';
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './style.css';

import App from './App.vue';
import router from './router'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title.toString()
  }
  next()
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
