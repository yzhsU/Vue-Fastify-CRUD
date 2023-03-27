<template>
  <div class="create-member-container">
    <h1>Create Member</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'CreateMember',
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const submitForm = async () => {
      try {
        await axios.post('/api/admin/member', {
          name: name.value,
          email: email.value,
          password: password.value
        })
        alert('Member created!')
        name.value = ''
        email.value = ''
        password.value = ''
      } catch (error) {
        alert('Failed to create member')
      }
    }

    return {
      name,
      email,
      password,
      submitForm
    }
  }
}
</script>
