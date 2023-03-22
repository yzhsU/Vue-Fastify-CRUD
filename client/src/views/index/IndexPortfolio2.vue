<template>
  <div class="portfolio2-container">
    <div><h1 class="title">킨더플레이룸을 운영하실 점주님들을 모십니다.</h1></div>
    <div><h5 class="subtitle">$$$$$$$$$</h5></div>
    <div class="items-container">
      <div class="item" v-for="(item, index) in items" :key="index">
        <img class="icon" :src="item.icon" />
        <h3 class="item-title">{{ item.title }}</h3>
        <h5 class="item-desc">{{ item.desc }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Party',
          desc: '계절에 따라 다양한 포토존 기획합니다',
          icon: '/images/portfolio/icon1.png'
        },
        {
          title: 'Play',
          desc: '안전하고 어린이들이 좋아하는 놀이기구를 마련했습니다.',
          icon: '/images/portfolio/icon2.png'
        },
        {
          title: 'Service',
          desc: '부모님들이 편안히 쉴 수 있는 커뮤니티를 위한 공간입니다',
          icon: '/images/portfolio/icon3.png'
        },
        {
          title: 'Blending',
          desc: '점주님들에게 프리미엄 키즈룸 운영 솔루션을 제공해드립니다.',
          icon: '/images/portfolio/icon4.png'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.portfolio2-container {
  background-color: white;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 5rem 0;
  .title {
    font-size: 36px;
    text-align: center;
  }
  .subtitle {
    font-size: 18px;
    text-align: center;
    margin-top: 2rem;
  }
  .items-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    width: 20%;
  }
  .icon {
    width: 6rem;
    height: 6rem;
  }
  .item-title {
    font-size: 24px;
    margin-top: 2rem;
  }
  .item-desc {
    font-size: 18px;
    margin-top: 2rem;
  }
}
</style>
