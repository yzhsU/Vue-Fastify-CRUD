<template>
  <div>
    <!-- 데이터를 관리하는 폼 -->
    <form>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div>
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          v-model="description"
        />
      </div>
      <div>
        <label for="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          @change="handleImageChange"
        />
      </div>
      <button type="button" @click="addPortfolioItem">Add</button>
    </form>
    <!-- 이미지 리스트 -->
    <div ref="visualContainer" class="visual-container">
      <div>
        <img :src="currentImage" :style="imageStyle" />
        <div v-for="(image, index) in images" :key="image.id">
          <img :src="image.src" />
          <button @click="deleteImage(index)" class="delete-button">×</button>
        </div>
      </div>
      <div class="controls">
        <div class="left-arrow" @click="previousImage">&lt;</div>
        <div class="right-arrow" @click="nextImage">&gt;</div>
      </div>
    </div>

    <!-- 추가 버튼 -->
    <button @click="addImage" class="add-button">Add Image</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminIndexMain',
  data () {
    return {
      title: '',
      description: '',
      images: [
        { id: 1, src: '/images/portfolio/visual/image1.jpg' },
        { id: 2, src: '/images/portfolio/visual/image2.jpg' },
        { id: 3, src: '/images/portfolio/visual/image3.jpg' }
      ],
      currentIndex: 0,
      aspectRatio: 1,
      imageFile: null
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]?.src
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
    async deleteImage (index) {
      const imageUrl = this.images[index].src
      try {
        // 서버 API를 호출하여 이미지를 삭제합니다.
        await axios.delete(`/api/images/${imageUrl}`)
        // 성공적으로 삭제되면, 화면에서 해당 이미지를 제거합니다.
        this.images.splice(index, 1)
      } catch (error) {
        console.error(error)
      }
    },
    nextImage () {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1
    },
    previousImage () {
      this.currentIndex =
        this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1
    }
  },
  mounted () {
    // 서버 API를 호출하여 이미지 목록을 가져옵니다.
    axios
      .get('/api/images')
      .then((response) => {
        this.images = response.data
      })
      .catch((error) => {
        console.error(error)
      })
    this.aspectRatio =
      this.$refs.visualContainer.clientWidth /
      this.$refs.visualContainer.clientHeight
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
