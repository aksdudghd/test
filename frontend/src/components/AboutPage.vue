<template>
  <div class="container">
    <section class="section0 s1125-320">
      <div class="section-title">
        <h2>IT 비즈니스 시작의 동반자</h2>
        <!-- <p>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p> -->
        <p>HAEMIL SOFT는 항상 고객의 긍정적인 동반자가 되도록 항상 노력하고 있습니다.</p>
      </div>
    </section>
    <section class="section1 s375-320">
      <div class="section-title">
        <h2>구성원</h2>
        <!-- <p>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p> -->
        <p>고객 존중을 바탕으로 고객의 입장에서 지속적인 변화를 지향합니다.</p>
      </div>
      <router-link class="button" :to="{ name: 'people', params: { id: '일꾼'}}">함께하는 사람들</router-link>
    </section>

    <section class="section2 s1125-320">
      <div class="section-title">
        <h2>가치에 가치를 더하다</h2>
        <p>HAEMIL SOFT는 지속적인 혁신을 통해 모두 쉽고 편리한 툴을 만드는게 목표입니다.</p>
      </div>
    </section>
    <section class="section3 s375-160">
      <div class="section-title">
        <h2>연혁</h2>
        <p>Do the best way</p>
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