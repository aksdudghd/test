<template>
  <div class="container">
    <h1>{{items.TITLE}}</h1>
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

<style scoped lang="scss" scope>
.container {
  text-align: left;
}
</style>