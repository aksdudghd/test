<template>
  <div class="container">
    <section class="section0 s1125-320">
      <div class="section-title">
        <h2>IT 비즈니스 시작의 동반자</h2>
        HAEMIL SOFT는 급변하는 경영 환경과 4차 산업 혁명에 발맞춰 축적된 노하우와 신기술로 스마트 비전을 만들어 나가겠습니다.
        <!-- <p></p>
        <h4>(주)해밀소프트(HAEMIL SOFTⓒ)는 기업비전의 실현과 지속적인 경쟁우위 확보를 위한 차별화를 본 전략으로 삼아  
         </h4>

         <h4>품질우선경영, 고객 가치 창출 및 제공을 기업의 핵심 이념으로 주요산업의 정보시스템에 대한 컨설팅, 시스템 개발, 시스템 통합, 시스템 관리를 체계적인 IT 서비스를 제공하며 
         </h4>
         <p></p>
         <h4>보고서 소프트웨어, 웹용 컴퍼넌트 개발에 전념하고 있으며, 현재 다양한 프로그램 개발/유지보수 업무를 하고 발전을 거듭해 왔습니다. 
         </h4>
        <p></p>
        <h4>사용자에게 최적의 솔루션을 제공하여 최고의 고객가치를 창조하는 Global 소프트웨어 전문기업의 축적된 기술력과 풍부한 노하우로 고객과 함께 성장해 나갈 것입니다.
         </h4> -->

      </div>
    </section>
    <section class="section1 s375-320">
      <div class="section-title">
        <h2>구성원</h2>
        <!-- <p>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p> -->
        <!-- <p>고객 존중을 바탕으로 고객의 입장에서 지속적인 변화를 지향합니다.</p> -->
        <h4>HAEMIL SOFT의 구성원들은 고객 존중을 바탕으로 고객의 입장에서 지속적인 변화를 지향합니다.</h4>
      </div>
      <router-link class="button" :to="{ name: 'people', params: { id: '일꾼'}}">함께하는 사람들</router-link>
    </section>

    <section class="section2 s1125-320">
      <div class="section-title">
        <h2>가치에 가치를 더하다</h2>
        <!-- <p>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p> -->
      <h4>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</h4>
      </div>
    </section>
    <section class="section3 s375-160">
      <div class="section-title">
        <h2>연혁</h2>
        <!-- <p>Do the best way</p> -->
      </div>
      <router-link class="button" :to="{ name: 'history', params: { id: '연혁'}}">달려온 길</router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  .section1 {
    background-image: url("../assets/images/ciprian-boiciuc-193062-unsplash.jpg");
  }
  .section2 {
    background-image: url("../assets/images/tyler-franta-589346-unsplash.jpg");
  }
  .section3 {
    background-image: url("../assets/images/alternate-skate-154657-unsplash.jpg");
  }

  
  .s1125-320 {
    width: 1125px;
    height: 320px;
  }
  .s375-320 {
    width: 375px;
    height: 320px;
  }
  .s375-160 {
    width: 375px;
    height: 160px;
  }
}
</style>