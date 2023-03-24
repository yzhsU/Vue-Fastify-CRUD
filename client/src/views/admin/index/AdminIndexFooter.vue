<template>
  <footer>
    <div>
      <ul>
        <li>
          <i class="fas fa-building"></i>
          <input
            v-model="company"
            placeholder="Company"
          />
        </li>
        <li>
          <i class="fas fa-user"></i>
          대표자:
          <input
            v-model="representative"
            placeholder="Representative"
          />
        </li>
        <li>
          <i class="fas fa-phone"></i>
          대표번호:
          <input
            v-model="phone"
            placeholder="Phone"
          />
        </li>
        <li>
          <i class="fas fa-id-card"></i>
          사업자 등록번호 :
          <input
            v-model="registration"
            placeholder="Registration"
          />
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          이메일 :
          <input
            v-model="email"
            placeholder="Email"
          />
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          <input v-model="address" @blur="updateFooter('address')" placeholder="Address" />
        </li>
      </ul>
      <button class="submit-button" @click="updateAllFooters">Update Footer</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AdminIndexFooter",
  data() {
    return {
      company: "킨더플레이룸",
      representative: "이은지",
      phone: "010-0000-0000",
      registration: "00-0000-00000",
      email: "aaa@gmail.com",
      address: "경상남도",
    };
  },
  created() {
    this.getFooter();
  },
  methods: {
    async getFooter() {
      const response = await fetch("/api/footer");
      const footer = await response.json();
      this.company = footer.company;
      this.representative = footer.representative;
      this.phone = footer.phone;
      this.registration = footer.registration;
      this.email = footer.email;
      this.address = footer.address;
    },
    async updateAllFooters() {
      const data = {
        company: this.company,
        representative: this.representative,
        phone: this.phone,
        registration: this.registration,
        email: this.email,
        address: this.address,
      };

      const response = await fetch("/api/footer", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to update all footers");
        return;
      }

      console.log("Updated all footers successfully");
    },
  },
};
</script>
<style scoped lang="scss">
footer {
  width: 100%;

  background-color: #f9f9f9;
  height: 30rem;
  display: flex;
  justify-content: left;
  align-items: center;

  > div {
    width: fit-content;
    margin-left: 4rem;
    text-align: left;

    > ul > li {
      list-style: none;
      font-size: 18px;
      margin-bottom: 1rem;

      i {
        margin-right: 1rem;
      }

      input {
        border: none;
        border-bottom: 1px solid #333;
        background-color: transparent;
        font-size: 18px;
        margin-left: 1rem;
        margin-right: 1rem;

        &:focus {
          outline: none;
        }
      }

      &:last-of-type input {
        margin-bottom: 1rem;
      }
    }
  }

  button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgb(54, 162, 235);
    cursor: pointer;

    &:hover {
      background-color: rgb(46, 137, 199);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>