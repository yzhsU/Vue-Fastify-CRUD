// routes/admin/index.ts

// File-level comment
// Author: yzhs (yzhs.go@gmail.com)
// Last Modified: 2023-03-27

// Import the necessary components and modules from vue-router
import { RouteRecordRaw } from 'vue-router';

// Import the AdminView component
import MemberCreate from '@/views/admin/member/MemberCreate.vue'
import MemberList from '@/views/admin/member/MemberList.vue'

// Define the routes for the admin section of the application
const memberRoutes: Array<RouteRecordRaw> = [
  {
    // The path for the member create route
    path: '/api/members/create',
    // The name for the member create route
    name: 'member-create-page',
    // The component to be displayed for the member create route
    component: MemberCreate
  },
  {
    // The path for the member create route
    path: '/api/members',
    // The name for the member create route
    name: 'member-list-page',
    // The component to be displayed for the member create route
    component: MemberList
  }
];

// Export the router instance
export default memberRoutes
