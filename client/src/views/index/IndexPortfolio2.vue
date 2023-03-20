<template>
    <div class="portfolio2">
      <h1 class="title">~~~~~~~~~</h1>
      <h5 class="subtitle"> $$$$$$$$$ </h5>

      <div class="item" v-for="(item, index) in items" :key="index">
        <img class="icon" :src="item.icon" />
        <h3 class="item-title">{{ item.title }}</h3>
        <h5 class="item-desc">{{ item.desc }}</h5>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Blending',
          desc: '깊은 바디감의 진한 “나이트”',
          icon: '/images/portfolio/icon1.png'
        },
        {
          title: 'Sunset',
          desc: '부드럽고 산미가 느껴지는 “썬셋”',
          icon: '/images/portfolio/icon2.png'
        },
        {
          title: 'Decaf',
          desc: '“디카페인” 세가지 스타일의 고품질 스폐셜 원두를 사용합니다.',
          icon: '/images/portfolio/icon3.png'
        },
        {
          title: 'Blending',
          desc: '깊은 바디감의 진한 “나이트”',
          icon: '/images/portfolio/icon4.png'
        }
      ]
    }
  }
}
</script>

  <style scoped>
  .portfolio2 {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 32rem;
  }

  .title {
    font-size: 36px;
    text-align: center;
  }

  .subtitle {
    font-size: 18px;
    text-align: center;
    margin-top: 2rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
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
  </style>
