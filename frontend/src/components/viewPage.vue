<template>
  <div class="container">
    <h2>{{items.TITLE}}</h2>
    <div>{{items.MEMO}}</div>
  </div>
</template>

<script>
export default {
    created () {
    //const baseURI = 'http://localhost:3000/api';
    var UID = this.$route.params.UID
    const baseURI = '/api';
    this.$http.get(`${baseURI}/list/${UID}`)
    .then((result) => {
        this.items = result.data[0];
    })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  
}
</style>