// routes/index.ts

// File-level comment
// Author: yzhs (yzhs.go@gmail.com)
// Last Modified: 2023-03-19

// Import the necessary components and modules from vue-router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import adminRoutes from './admin'

// Import the HomeView component
import HomeView from '../views/HomeView.vue'

// Define the routes for the application
const routes: Array<RouteRecordRaw> = [
  {
    // The path for the home route
    path: '/',
    // The name for the home route
    name: 'home',
    // The component to be displayed for the home route
    component: HomeView
  },
  {
    // The path for the about route
    path: '/about',
    // The name for the about route
    name: 'about',
    // The component to be displayed for the about route, lazy loaded using code splitting
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// Create the router instance
const router = createRouter({
  // Use the createWebHistory function to create a web-based history management
  history: createWebHistory(process.env.BASE_URL),
  // Pass the defined routes to the router
  routes
})

router.addRoute({
  path: '/admin',
  meta: {
    requiresAuth: true // 예를 들어, 관리자 전용 페이지는 로그인이 필요할 수 있습니다.
  },
  children: adminRoutes
})

// Export the router instance
export default router
