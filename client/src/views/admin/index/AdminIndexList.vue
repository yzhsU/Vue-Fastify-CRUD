<template>
    <div class="admin-main-comtainer">
      <div>
        <select class="form-select" v-model="selectedPortfolio" @change="loadPortfolioComponent">
          <option value="1">Portfolio 1</option>
          <option value="2">Portfolio 2</option>
          <option value="3">Portfolio 3</option>
          <option value="4">Portfolio 4</option>
        </select>
        <div>
          <component :is="currentPortfolioComponent" />
        </div>
      </div>
    <admin-index-footer />
  </div>
</template>
<script>
import AdminIndexFooter from './AdminIndexFooter.vue'
import AdminIndexPortfolio1 from './AdminIndexPortfolio1.vue'
import AdminIndexPortfolio2 from './AdminIndexPortfolio2.vue'
import AdminIndexPortfolio3 from './AdminIndexPortfolio3.vue'
import AdminIndexPortfolio4 from './AdminIndexPortfolio4.vue'

export default {
  name: 'AdminIndexList',
  data() {
    return {
      selectedPortfolio: 1,
      currentPortfolioComponent: 'AdminIndexPortfolio1'
    }
  },
  components: {
    AdminIndexPortfolio1,
    AdminIndexPortfolio2,
    AdminIndexPortfolio3,
    AdminIndexPortfolio4,
    'admin-index-footer': AdminIndexFooter
  },
  methods: {
    loadPortfolioComponent() {
      switch (this.selectedPortfolio) {
        case '1':
          this.currentPortfolioComponent = 'AdminIndexPortfolio1'
          break
        case '2':
          this.currentPortfolioComponent = 'AdminIndexPortfolio2'
          break
        case '3':
          this.currentPortfolioComponent = 'AdminIndexPortfolio3'
          break
        case '4':
          this.currentPortfolioComponent = 'AdminIndexPortfolio4'
          break
        default:
          this.currentPortfolioComponent = null
      }
    }
  }
}
</script>
<style lang="scss">
.admin-main-comtainer {
    > div {
      margin-top: 1rem;
      margin-bottom: 4rem;
      padding: 4rem 0;
      background-color: rgb(223, 239, 223);
      border-top: .4rem rgb(141, 246, 141) solid;
      > select {
          width: 60%;
          margin: 1.4rem auto;
      }
    }
}
</style>
  