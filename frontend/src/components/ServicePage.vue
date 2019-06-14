<template>
  <div class="container">
    <h2>service</h2>
    <transition-group tag="ul" name="list">
      <li v-for="(item, idx) in items" v-bind:key="idx" class="list-item">
        <div>{{idx}}</div>
        <div>ip4 : {{ item.ip4}}</div>
        <div>ip6 : {{ item.ip6}}</div>
        <div>interface : {{ item.iface}}</div>
        <div>mac : {{ item.mac}}</div>
      </li>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  created() {
    //const baseURI = 'http://localhost:3000/api';
    const baseURI = "/api";
    this.$http.get(`${baseURI}/user`).then(result => {
      this.items = result.data;
      //console.log(this.items)
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
  ul {
    position: relative;
    padding: 0px;
    margin: 0px;
    width: 100%;
    /*width: 750px;*/
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 12px;
    width: 100%;
    min-height: 48px;
    border-bottom: 1px solid #efefef;
    &:first-child {
      border-top: 1px solid #efefef;
    }
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(1);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  .list-leave-active {
    position: absolute;
  }

  .list-leave-to {
    opacity: 0;
    transform: scaleY(1);
    transform-origin: center top;
  }
}
</style>