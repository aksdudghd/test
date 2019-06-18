<template>
  <div class="container">
    <!--
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
    -->

    <section class="section0 s375-640">
      <div class="section-title">
        <h2>
          <span class>ActiveX 에서 탈출</span>
        </h2>
        <p
          class
        >해밀소프트의 모든 프로그램은 액티브X 로부터 탈출 사용자에게 거부감 없는 프로그램 으로, 서비스 제공 업체와 사용자를 조금 더 편하게 하기 위해 다음과 같이 노력하고 있습니다</p>
      </div>
    </section>

    <section class="section1 s375-640">
      <div class="section-title">
        <h2>솔루션</h2>
        <p class>손쉽게 결과물을 제작하는 제품</p>
      </div>
      <button href class="button">제품 보기</button>
    </section>

    <section class="section2 s375-640">
      <div class="section-title">
        <h2>프로그램 제작</h2>
        <p class>사용자의 요구에 맞는 최적화된 프로그램을 만들어 드립니다.</p>
      </div>
      <button href class="button">어떻게 만드나 보기</button>
    </section>

    <section class="section3 s375-320">
      <div class="section-title">
        <h2>작업물</h2>
        <p class>몇가지들.</p>
      </div>
      <button href class="button">더 보기</button>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    const baseURI = "http://59.4.223.150:3000/api";
    //const baseURI = "/api";
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  .section2 {
    background-image: url("../assets/images/ali-morshedlou-566510.jpg");
  }
  .s375-640 {
    width: 375px;
    height: 640px;
  }
  .s375-320 {
    width: 375px;
    height: 320px;
  }
}
/*.container {
  ul {
    position: relative;
    padding: 0px;
    margin: 0px;
    width: 100%;
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
}*/
</style>