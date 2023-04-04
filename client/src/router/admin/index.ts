// routes/admin/index.ts

// File-level comment
// Author: yzhs (yzhs.go@gmail.com)
// Last Modified: 2023-03-22

// Import the necessary components and modules from vue-router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Import the AdminView component
import AdminView from '@/views/admin/AdminView.vue'
import AdminIndexList from '@/views/admin/index/AdminIndexList.vue'

// Import the routes for the member section of the application
import memberRoutes from './members';

// Define the routes for the admin section of the application
const routes: Array<RouteRecordRaw> = [
  {
    // The path for the admin route
    path: '/api/admin',
    // The name for the admin route
    name: 'admin',
    // The component to be displayed for the admin route
    component: AdminView,
    children: [
      {
        path: '',
        component: AdminIndexList
      },
      // Add the member routes to the admin routes
      ...memberRoutes
    ]
  }
]

// Export the router instance
export default routes
