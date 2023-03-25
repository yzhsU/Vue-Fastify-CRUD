// routes/admin/index.ts

// File-level comment
// Author: yzhs (yzhs.go@gmail.com)
// Last Modified: 2023-03-22

// Import the necessary components and modules from vue-router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Import the AdminView component
import AdminView from '../../views/admin/AdminView.vue'

// Define the routes for the admin section of the application
const routes: Array<RouteRecordRaw> = [
  {
    // The path for the admin route
    path: '/admin/member',
    // The name for the admin route
    name: 'create-member-page',
    // The component to be displayed for the admin route
    component: AdminView
  }
]

// Export the router instance
export default routes
