<template>
    <div>
    <div class="portfolio1-container">
      <!-- 이미지 리스트 -->
      <div ref="visualContainer" class="visual-container">
        <div class="image-slider" :style="{ transform: sliderPosition }">
          <div
            v-for="(image, index) in images"
            :key="image.id"
            :class="{ 'active-image': currentIndex === index }"
          >
            <img :src="image.src" :style="imageStyle" />
            <button @click="deleteImage(index)" class="delete-button">×</button>
          </div>
        </div>
        <div class="controls">
          <a @click.prevent="previousImage" class="left-arrow">&lt;</a>
          <a @click.prevent="nextImage" class="right-arrow">&gt;</a>
        </div>
      </div>
  
      <!-- 추가 버튼 -->
      <div
        class="add-image-overlay"
        :class="{ 'drag-over': isDragOver }"
        @dragover.prevent
        @dragenter.prevent="isDragOver = true"
        @dragleave.prevent="isDragOver = false"
        @drop.prevent="handleDrop"
      >
        <input
          type="file"
          id="image"
          name="image"
          @change="handleImageChange"
          ref="fileInput"
          style="display: none"
        />
        <div class="add-image-icon" @click="triggerFileInput">+</div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'AdminIndexPortfolio1',
    data() {
      return {
        title: '',
        description: '',
        images: [
          { id: 0, src: '/images/portfolio/visual/image1.jpg' },
          { id: 1, src: '/images/portfolio/visual/image2.jpg' },
          { id: 2, src: '/images/portfolio/visual/image3.jpg' }
        ],
        currentIndex: 0,
        aspectRatio: 1,
        imageFile: null,
        isDragOver: false
      }
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex]?.src
      },
      imageStyle() {
        return {
          height: '100%',
          width: '100%',
          objectFit: this.aspectRatio > 1 ? 'contain' : 'cover',
          objectPosition: 'center center'
        }
      },
      sliderPosition() {
        return `translateX(-${this.currentIndex * 100}%)`
      }
    },
    methods: {
      async deleteImage(index) {
        const confirmDeletion = window.confirm('이미지를 삭제하시겠습니까?')
        if (confirmDeletion) {
          const imageUrl = this.images[index].src
          try {
            // 서버 API를 호출하여 이미지를 삭제합니다.
            await axios.delete(`/api/images/${imageUrl}`)
            // 성공적으로 삭제되면, 화면에서 해당 이미지를 제거합니다.
            this.images.splice(index, 1)
          } catch (error) {
            console.error(error)
          }
        }
      },
      nextImage() {
        this.currentIndex =
          this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1
      },
      previousImage() {
        this.currentIndex =
          this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1
      },
      triggerFileInput() {
        this.$refs.fileInput.click()
      },
      handleImageChange(event) {
        const file = event.target.files[0]
        // Process the file here
        console.log(file)
      },
      handleDrop(event) {
        event.preventDefault()
        const file = event.dataTransfer.files[0]
        if (file) {
          // Process the file here
          console.log(file)
        }
      }
    },
    mounted() {
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
  .portfolio1-container {
    position: relative;
    .visual-container {
      position: relative;
      height: 100%;
      width: 80%;
      margin: 0 auto;
      overflow: hidden;
      .image-slider {
        display: flex;
        transition: transform 0.3s;
      }
      .image-slider > div {
        flex-shrink: 0;
        width: 100%;
        position: relative;
      }
      .delete-button {
        position: absolute;
        top: 0;
        right: 0;
      }
      .controls {
        z-index: 1;
        position: absolute;
        font-size: 2.2rem;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        transform: translateY(1.1rem);
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
  
    .add-image-overlay {
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    transform: translateX(-50%);
  }
  
  .add-image-overlay.drag-over {
    background-color: rgba(158, 158, 158, 0.7);
  }
  
    .add-image-icon {
      display: inline-block;
      font-size: 2rem;
      font-weight: bold;
      border: 2px solid #000;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      line-height: 45px;
      text-align: center;
      cursor: pointer;
    }
  }
  </style>
  