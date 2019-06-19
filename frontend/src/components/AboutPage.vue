<template>
  <div class="container">
    <section class="section0 s1125-320">
      <div class="section-title">
        <h2>스토리</h2>
        <p>HAEMILSOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p>
      </div>
    </section>
    <section class="section1 s375-320">
      <div class="section-title">
        <h2>함께하는 일꾼들</h2>
        <p>HAEMILSOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p>
      </div>
      <router-link class="button" :to="{ name: 'people', params: { id: '일꾼'}}">자주 보면 부끄러움</router-link>
    </section>

    <section class="section2 s1125-320">
      <div class="section-title">
        <h2>가치에 가치를 더하다</h2>
        <p>HAEMILSOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p>
      </div>
    </section>
    <section class="section3 s375-160">
      <div class="section-title">
        <h2>달려온 길</h2>
        <p>Do the best way</p>
      </div>
      <router-link class="button" :to="{ name: 'history', params: { id: '연혁'}}">한번만 봐도 충분</router-link>
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