<template>
  <div ref="visualContainer" class="visual-container">
    <img :src="currentImage" :style="imageStyle" />
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
      currentIndex: 0,
      aspectRatio: 1
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    },
    imageStyle () {
      return {
        height: `${this.aspectRatio * 100}%`,
        width: '100%',
        objectFit: this.aspectRatio > 1 ? 'contain' : 'cover',
        objectPosition: 'center center'
      }
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
  },
  mounted () {
    this.aspectRatio = this.$refs.visualContainer.clientWidth / this.$refs.visualContainer.clientHeight
  }
}
</script>
<style lang="scss">
.visual-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
  .left-arrow {
    position: absolute;
    left: 1rem;
    cursor: pointer;
  }
  .right-arrow {
    position: absolute;
    right: 1rem;
    cursor: pointer;
  }
}

</style>
