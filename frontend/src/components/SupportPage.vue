<template>
  <div class="container">
    <section class="section0 s750-640">
      <div class="section-title">
        <h2>위치</h2>
        <p>경남 진주시 범골로 54번길 30-9 드림IT벨리 B607</p>
      </div>
    </section>
    <section class="section1 s375-640">
      <div class="section-title">
        <h2>제품문의</h2>
        <p>솔루션, 제품의뢰, 기타등등 최대한 빠른시간에 답변 드리겠습니다.</p>
      </div>
      <button href class="button">문의하기</button>
    </section>
    <section class="section2 s375-320">
      <div class="section-title">
        <h2>문제해결</h2>
        <p>비슷한 문제점 해결 및 새로운 궁금증을 도와드립니다.</p>
      </div>
      
      <router-link class="button" :to="{ name: 'faq', params: { CATAGORY: 'faq'}}">도와줄께</router-link>
    </section>
    <section class="section3 s188-320">
      <div class="section-title">
        <h2>자료실</h2>
        <p>필요자료들</p>
      </div>
      <router-link class="button" :to="{ name: 'data', params: { CATAGORY: 'data'}}">다운로드</router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  .s750-640 {
    width: 750px;
    height: 640px;
  }
  .s375-640 {
    width: 375px;
    height: 640px;
  }
  .s375-320 {
    width: 375px;
    height: 320px;
  }
  .s188-320 {
    width: 188px;
    height: 320px;
  }
}
</style>
