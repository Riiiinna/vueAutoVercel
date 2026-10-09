import {createRouter, createWebHashHistory} from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todos from '../views/Todos.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/todos', component: Todos}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
