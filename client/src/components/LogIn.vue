<template #login-modal>
  <div class="login-container">
    <div class="login-background" @click="closeModal"></div>
    <!-- Background Image -->
    <div class="login-form">
      <h1>Login</h1>
      <button class="close-btn" @click="closeModal">X</button>
      <form @submit.prevent="submitLoginForm">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogIn',
  props: {
    modalVisible: Boolean
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    submitLoginForm() {
      // POST 요청 보내기
      this.$axios
        .post('/api/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          // 로그인 성공 시, 로그인 폼을 닫고 다른 작업 수행
          this.closeModal();
          // ...
        })
        .catch(error => {
          // 로그인 실패 시, 오류 메시지 출력
          console.log(error);
        });
    }
  }
});
</script>

<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  .login-background {
    background-image: url('/public/images/background-login.jpg');
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .login-form {
    width: 50%;
    height: 20rem;
    background-color: white;
    padding: 50px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
}
</style>
