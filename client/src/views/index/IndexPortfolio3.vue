<template>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="(card, index) in cards" :key="index">
          <div class="card">
            <img :src="card.img" class="card-img-top" alt="card image">
            <div class="card-body">
              <h5 class="card-title text-center">{{card.text}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          img: '/images/portfolio/card1.jpg',
          text: 'Card 1'
        },
        {
          img: '/images/portfolio/card2.jpg',
          text: 'Card 2'
        },
        {
          img: '/images/portfolio/card3.jpg',
          text: 'Card 3'
        },
        {
          img: '/images/portfolio/card4.jpg',
          text: 'Card 4'
        },
        {
          img: '/images/portfolio/card5.jpg',
          text: 'Card 5'
        },
        {
          img: '/images/portfolio/card6.jpg',
          text: 'Card 6'
        }
      ]
    }
  }
}
</script>

  <style scoped>
  .card {
    margin: 1rem;
  }

  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  </style>
