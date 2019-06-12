<template>
  <div class="container">
    <h1>List</h1>
    
    <div v-for="(item, idx) in items">
        <div>
            <span>{{idx}}</span><strong>{{ item.TITLE}}</strong>
            <router-link :to="{ name: 'view', params: { UID: item.UID }}">더보기</router-link>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  created () {
    //const baseURI = 'http://localhost:3000/api';
    const baseURI = '/api';
    this.$http.get(`${baseURI}/list`)
    .then((result) => {
        this.items = result.data;
    })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style scoped lang="scss" scope>
.container {
  text-align: left;
}
</style>