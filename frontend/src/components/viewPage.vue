<template>
  <div class="container">
    <div>
      <h2>{{items.TITLE}}</h2>
      <div>{{items.COMMENT}}</div>
      <div>{{items.WRITER}}</div>
      <div>{{items.DATE}}</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const baseURI = "http://59.4.223.150:3000/api";
    //const baseURI = "/api";
    var CATAGORY = '' || this.$route.params.CATAGORY;
    var UID = this.$route.params.UID;
    this.$http.get(`${baseURI}/list/${CATAGORY}/${UID}`).then(result => {
      this.items = result.data[0];
    });
  },
  data() {
    return {
      items: []
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
}
</style>