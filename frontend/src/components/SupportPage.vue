<template>
  <div class="container">
    <section class="section0 s750-640">
      <div class="section-title">
        <h2>오시는 길</h2>
        <p></p>
        <p></p>
        <p style="font-size:17px;">경남 진주시 범골로 54번길 30-9 드림IT벨리 B607</p>
        <table cellpadding="0" cellspacing="0" width="536"> <tr> <td style="border:1px solid #Arial;"><a href="https://map.naver.com/?query=6rK964KoIOynhOyjvOyLnCDrspTqs6jroZwgNTTrsojquLggMzAtOSDrk5zrprxJVOuyqOumrCBCNjA3&searchCoord=&tab=1&lng=eca1cebc61ebc033530f8323da0a5e4d&mapMode=0&mpx=d7e971ac2a8bfa34b1b109ddb52c20853f7faa381b4ec94e1b92c17ebe50a3fd5773f0bb1002111528903cc30398b46a&lat=a0c58a658b2ea28a83a7f6f0c6816fe8&dlevel=10&enc=b64&menu=location&__fromRestorer=true" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1560952150502_1230351542" width="534" height="418" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2019.6.19</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://map.naver.com/?query=6rK964KoIOynhOyjvOyLnCDrspTqs6jroZwgNTTrsojquLggMzAtOSDrk5zrprxJVOuyqOumrCBCNjA3&searchCoord=&tab=1&lng=eca1cebc61ebc033530f8323da0a5e4d&mapMode=0&mpx=d7e971ac2a8bfa34b1b109ddb52c20853f7faa381b4ec94e1b92c17ebe50a3fd5773f0bb1002111528903cc30398b46a&lat=a0c58a658b2ea28a83a7f6f0c6816fe8&dlevel=10&enc=b64&menu=location&__fromRestorer=true" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="http://www.nhncorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>
      </div>
    </section>
    <section class="section1 s375-640">
      <div class="section-title">
        <h2>제품 문의</h2>
        <p>제품구매 및 제작의뢰</p>
        <p>☎055-761-1070</p>
        <p>AAAAA@gmail.com</p>
      </div>
      <button href class="button">문의하기</button>
      <div class="section-title">
        <h2>고객 지원</h2>
        <p>유지보수 및 기술지원</p>
      </div>
      <button href class="button">문의하기</button>
    </section>
    <section class="section2 s375-320">
      <div class="section-title">
        <h2>FAQ</h2>
        <p>자주묻는질문</p>
      </div>
      
      <router-link class="button" :to="{ name: 'faq', params: { CATAGORY: 'faq'}}">바로가기</router-link>
    </section>
    <section class="section3 s188-320">
      <div class="section-title">
        <h2>자료실</h2>
        <p>제품 카탈로그</p>
        <p>제품 견적의뢰서</p>
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
