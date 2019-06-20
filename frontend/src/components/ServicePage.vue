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
        <p></p>
    
        <p>"고객의 편의는 높이고 브라우저 호환성은 넓히다." </p>

        <p
          class
        >해밀소프트의 모든 제품은 Non-ActiveX 를 지향하며 
        사용자에게 거부감 없는 프로그램으로, 
        서비스 제공 업체와 사용자의 편의성 향상을 위해 노력하고 있습니다.</p>
     


        <strong> ■&nbsp;&nbsp;Non-ActiveX, Non-PlugIn</strong> 
        <p></p>
        <strong> ■&nbsp;&nbsp;HTML5 기반의 웹 표준 준수</strong>
        <p></p>
        <strong> ■&nbsp;&nbsp;IE, 크롬, 사파리, 파이어폭스 등의 웹브라우저 지원</strong>
        <p></p>
        <strong> ■&nbsp;&nbsp;높은 보안성 및 다양한 사용자 환경 지원</strong>
        <p></p>

        
      </div>
    </section>

    <section class="section1 s375-640">
      <div class="section-title">
        <h2>솔루션</h2>
        <p class>쉽고 편리하며 강력한 Reporting Tool을 소개합니다.</p>
      </div>
      <router-link class="button" :to="{ name: 'solution', params: { id: '솔루션'}}">제품 보기</router-link>
    </section>

    <section class="section2 s375-640">
      <div class="section-title">
        <h2>프로그램 개발 및 운영</h2>
        <p class>사용자의 요구에 맞는 최적화된 프로그램을 만들어 드립니다.</p>
      </div>
      <router-link class="button" :to="{ name: 'program', params: { id: '프로그램'}}">주요 사업 보기</router-link>
    </section>

    <section class="section3 s375-320">
      <div class="section-title">
        <h2>프로젝트</h2>
        <p class>쉽고 편한 IT서비스를 통해 고객만족과 가치를 창조합니다.</p>
      </div>
      <router-link class="button" :to="{ name: 'work', params: { id: '작업물'}}">더 보기</router-link>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    //const baseURI = "http://59.4.223.150:3000/api";
    const baseURI = "/api";
    this.$http.get(`${baseURI}/user`).then(result => {
      this.items = result.data;
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

  /*.section1 {
    background-image: url("../assets/images/carl-heyerdahl-181868-unsplash.jpg");
  }*/
  .section2 {
    background-image: url("../assets/images/sleek-playstation-controller-picjumbo-com.jpg");
    /*column-rule: .section-title{
      h2{
        color: #0277bd
      }
      p{
        color: #1e9cd9;
      }
    }*/
  }
  /*.section2.section3 {
    background-image: url("../assets/images/ali-morshedlou-566510.jpg");
  }*/

  .s375-640 {
    width: 375px;
    height: 640px;
  }
  .s375-320 {
    width: 375px;
    height: 320px;
  }
}

</style>