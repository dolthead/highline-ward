import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Testimonies from '../views/Testimonies.vue';
import Speakers from '../views/Speakers.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/1',
    name: 'Testimonies',
    component: Testimonies
  },
  {
    path: '/2',
    name: 'Speakers',
    component: Speakers
  },
  {
    path: '/cal',
    name: 'Calendar',
    component: Home,
    beforeEnter() {
      window.location.href = "https://calendar.google.com/calendar/u/0?cid=M3Yzdm8xaG1ubjFwcHJlZGphcWxlMjdxZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
