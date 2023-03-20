<template>
  <div>
    <img :src="currentImage" />
    <div class="controls">
      <div class="left-arrow" @click="previousImage">&lt;</div>
      <div class="right-arrow" @click="nextImage">&gt;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        '/images/portfolio/visual/image1.jpg',
        '/images/portfolio/visual/image2.jpg',
        '/images/portfolio/visual/image3.jpg'
      ],
      currentIndex: 0
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    }
  },
  methods: {
    nextImage () {
      this.currentIndex =
            this.currentIndex === this.images.length - 1
              ? 0
              : this.currentIndex + 1
    },
    previousImage () {
      this.currentIndex =
            this.currentIndex === 0
              ? this.images.length - 1
              : this.currentIndex - 1
    }
  }
}
</script>

<style>
.controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left-arrow,
.right-arrow {
  cursor: pointer;
}

.left-arrow {
  position: absolute;
  left: 1rem;
}

.right-arrow {
  position: absolute;
  right: 1rem;
}
</style>
