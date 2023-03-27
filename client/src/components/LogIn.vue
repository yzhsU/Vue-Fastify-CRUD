<template>
  <div class="login-container">
    <div class="login-background">
      <!-- Background Image -->
    </div>
    <div class="login-form">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogIn',
  components: {
    // ...
  },
  data() {
    return {
      // ...
    }
  },
  methods: {
    // ...
  }
})
</script>

<style>
.login-container {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login-background {
  background-image: url('/public/images/background-login.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.login-form {
  background-color: white;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
