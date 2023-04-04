<template>
  <div>
    <Header />
    <main>
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
      <Portfolio4 />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Portfolio1 from '@/views/index/IndexPortfolio1.vue'
import Portfolio2 from '@/views/index/IndexPortfolio2.vue'
import Portfolio3 from '@/views/index/IndexPortfolio3.vue'
import Portfolio4 from '@/views/index/IndexPortfolio4.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Footer
  }
}
</script>
