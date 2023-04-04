<!--
Last Modified: 2023-03-23
Author: yzhs (yzhs.go@gmail.com)
File Name: AdminView.vue
-->
<template>
  <div>
    <AdminHeader />
    <main>
      <router-view />
    </main>
    <!-- <SiteFooter /> -->
  </div>
</template>

<script lang="ts">
import AdminHeader from '@/components/admin/AdminHeader.vue'
//import Footer from '@/components/Footer.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminView',
  components: {
    AdminHeader
  }
})

</script>
