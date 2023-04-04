<template>
  <footer>
    <div>
      <ul>
        <li><i class="fas fa-building"></i> <span>{{ company }}</span></li>
        <li><i class="fas fa-user"></i> <span> 대표자: {{ representative }}</span></li>
        <li><i class="fas fa-phone"></i> <span> 대표번호: {{ phone }}</span></li>
        <li><i class="fas fa-id-card"></i> <span> 사업자 등록번호 : {{ registration }}</span></li>
        <li><i class="fas fa-envelope"></i> <span> 이메일 : {{ email }}</span></li>
        <li><i class="fas fa-map-marker-alt"></i> <span> {{ address }}</span></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      company: '킨더플레이룸',
      representative: '이은지',
      phone: '000-000-0000',
      registration: '000-00-000000',
      email: '------@gmail.com',
      address: 'ssss, ssss'
    }
  }
}
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
    }
  }
}
</style>
