import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
	  alias: '/tasks',
    name: 'tasks',
    component: () => import('../components/TaskList.vue')
  },
  {
    path: '/tasks/new',
    name: 'tasks-new',
    component: () => import('../components/TaskForm.vue')
  },
  {
    path: '/tasks/:id',
    name: 'tasks-details',
    component: () => import('../components/TaskDetail.vue')
  }
];

console.log(process.env.BASE_URL);

const router = createRouter({
	history: createWebHistory(),
	routes: routes
});

export default router;