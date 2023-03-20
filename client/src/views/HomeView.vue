<template>
  <div>
    <SiteHeader />
    <main>
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
      <Portfolio4 />
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import Portfolio1 from '@/views/index/IndexPortfolio1.vue'
import Portfolio2 from '@/views/index/IndexPortfolio2.vue'
import Portfolio3 from '@/views/index/IndexPortfolio3.vue'
import Portfolio4 from '@/views/index/IndexPortfolio4.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    SiteFooter
  }
}
</script>
