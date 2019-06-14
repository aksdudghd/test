<template>
  <div id="app">

    <header id="header">
      <nav id="nav">
        <router-link class="button" to="/">시작</router-link>
        <router-link class="button" to="/service">하는일</router-link>
        <router-link class="button" to="/about">소개</router-link>
        <router-link class="button" to="/list">지원</router-link>
      </nav>
    </header>

    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>

    <footer id="footer">
      <span class="copyright">&copy; HAEMILSOFT co,Ltd All rights reserved.</span>
      <span class="product">ATTO report &amp; X studio</span>
    </footer>

  </div>
</template>

<style lang="scss">
$app-main-color: #1c92cd;

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
* {
  box-sizing: border-box;
}
.button {
  background:transparent;
  border: none;
  height:48px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active &:focus {
    border: none;
    outline: none;
  }
}
html {
  padding: 0;
  margin: 0;
  width:100%;
  height: 100%;

  body {
    padding: 0;
    margin: 0;
    width:inherit;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #app {
        min-width: 320px;
      font-family: "Noto Sans KR", "Raleway", "Work Sans", "Roboto", sans-serif;
      font-size: 14px;
      line-height: 1.6;
      word-break: keep-all;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #header {
          border: 1px solid #F00;
          height: 48px;
          width: 100%;
          min-height: 48px;
        #nav {
          display: flex;
          justify-content: center;
          align-items: center;
          a.button {
                height: 48px;
                text-decoration: none;
                color: $app-main-color;
                padding: 0 24px;
                display: flex;
                align-items: center;
                &.router-link-exact-active {
                    color: #f00;
                }
          }
        }
      }

      #footer {
            border: 0px solid #F00;
            color: $app-main-color;
            width: 100%;
            /*margin-top: auto;*/
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .copyright{
                display: flex;
                align-items: center;
                height: 48px;
                min-height: 48px;
            }
            .product{

            }
      }
    }

    .container {
        border: 1px solid #ccc;
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }
}
</style>
