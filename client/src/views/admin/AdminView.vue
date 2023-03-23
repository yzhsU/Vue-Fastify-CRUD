<!--
Last Modified: 2023-03-23
Author: yzhs (yzhs.go@gmail.com)
File Name: AdminView.vue
-->
<template>
  <div>
    <AdminHeader />
    <main>
      <AdminMain />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import AdminHeader from '@/components/admin/AdminHeader.vue'
import AdminMain from '@/views/admin/index/AdminIndexMain.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default {
  components: {
    AdminHeader,
    AdminMain,
    SiteFooter
  }
}
</script>
