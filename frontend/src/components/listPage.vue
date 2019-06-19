<template>
  <div class="container">
    <h2>List</h2>
    <transition-group tag="ul" name="list">
      <li v-for="(item, idx) in items" v-bind:key="idx">
        <div>
          <span class="no">{{idx}}</span>
          <span class="catagory">{{item.CATAGORY}}</span>
          <span class="uid">{{item.UID}}</span>
          <span class="title">{{item.TITLE}}</span>
        </div>
        <router-link :to="{ name: 'view', params: { CATAGORY: item.CATAGORY, UID: item.UID }}">detail</router-link>
      </li>
    </transition-group>
    <button @click="addPosts" class="button button-inverted">add</button>
  </div>
</template>

<script>
export default {
  created() {
    const baseURI = 'http://59.4.223.150:3000/api';
    //const baseURI = "/api";
    var CATAGORY = '' || this.$route.params.CATAGORY;
    //console.log('====',CATAGORY)
    this.$http.get(`${baseURI}/list/${CATAGORY}`).then(result => {
      this.items = result.data;
    });
  },
  data() {
    return {
      items: [
        
      ]
    };
  },
  methods: {
    addPosts: function() {
      this.items.push({
        title: `${Math.floor(Math.random() * 10 + 1)} post`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: #efefef;
  width: 100%;
}
.container {
  ul {
    position: relative;
    padding: 0px;
    margin: 0px;
    width: 100%;
    /*width: 750px;*/
    display: flex;
    flex-direction: column-reverse;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    width: 100%;
    min-height: 48px;
    border-bottom: 1px solid #efefef;
    &:last-child {
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