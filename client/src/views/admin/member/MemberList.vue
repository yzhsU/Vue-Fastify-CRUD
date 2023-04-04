<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Phone Number</th>
          <th>Branch</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id" @click="editMember(member)">
          <td v-text="member.id"></td>
          <td :class="{ 'editing': member.editing }">
            <span v-if="!member.editing" v-text="member.phoneNumber"></span>
            <input v-else type="text" v-model="member.phoneNumber" />
          </td>
          <td :class="{ 'editing': member.editing }">
            <span v-if="!member.editing" v-text="member.branch"></span>
            <input v-else type="text" v-model="member.branch" />
          </td>
          <td :class="{ 'editing': member.editing }">
            <span v-if="!member.editing" v-text="member.address"></span>
            <input v-else type="text" v-model="member.address" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'MemberList',
  components: {
    MemberEdit, // 컴포넌트 등록
  },
  data() {
    return {
      members: [
        {
          id: 1,
          phoneNumber: '010-1234-5678',
          branch: 'Seoul',
          address: '1234 ABC Street',
          editing: false
        },
        {
          id: 2,
          phoneNumber: '010-9876-5432',
          branch: 'Busan',
          address: '5678 DEF Street',
          editing: false
        }
        // Add more members here
      ]
    }
  }
})

</script>

<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.editing {
  padding: 0;
}

.editing input {
  border: none;
  width: 100%;
  padding: 6px;
}
</style>
