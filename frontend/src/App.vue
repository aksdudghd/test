<template>
  <div id="app">
    <guide axisV></guide>

    <header id="header">
      <nav id="nav">
        <router-link class="button button-inverted" to="/">HOME</router-link>
        <router-link class="button button-inverted" to="/service">SERVICE</router-link>
        <router-link class="button button-inverted" to="/about">ABOUT</router-link>
        <router-link class="button button-inverted" to="/support">SUPPORT</router-link>
      </nav>
    </header>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <div class="transition" ref="trans">
      <guide axisV></guide>
    </div>

    <footer id="footer">
      <span class="copyright">&copy; HAEMILSOFT co,Ltd All rights reserved.</span>
      <span class="product">ATTO report &amp; X studio</span>
    </footer>

  </div>
</template>

<script>
import Guide from "@/components/Guide";
import store from "./store";
import router from "./router";

export default {
  components: {
    Guide
  },
  data() {
    return {
      isLoad: false,
      locale: "en",
      items: []
    };
  },
  mounted() {
    const trans = this.$refs["trans"];
    router.beforeEach((to, from, next) => {
      //console.log(from.name, ">>>", to.name);
      trans.classList.add('active');
      next();
      

      if (to.path.split("/").length > 2) {
        // this.transitionName = to.meta.transition;
        //next();
      } else {

      }
    });

    router.afterEach((to, from) => {
      //console.log(to, from)
      setTimeout(() => {
        trans.classList.remove('active');
      }, 300);
    });
  },
  computed: {
    
  }
};
</script>

<style lang="scss">
$app-main-color: #1c92cd;

* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
h7 {
  margin: 0;
  font-weight: 100;
}
p {
  margin-top: 0;
}
section {
  border: 0px solid #ccc;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;

  background-size: cover;
  background-position: center;
}
.button {
  display: inline-block;
  height: 48px;
  padding: 16px 42px;
  border: 0;
  border-radius: 0;
  color: #fff;
  background-color: #323232;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
  outline: none !important;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active &:focus {
  }
}
.button-inverted {
  background-color: #efefef;
  color: #323232;
}
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  body {
    padding: 0;
    margin: 0;
    width: inherit;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #app {
      position: relative;
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
      justify-content: flex-start;
      align-items: center;
      #header {
        border: 0px solid #f00;
        height: 48px;
        width: 100%;
        min-height: 48px;
        z-index: 100;
        #nav {
          display: flex;
          justify-content: center;
          align-items: center;
          a.button {
            background: transparent;
            font-size: 14px;
            font-weight: 600;
            padding: 16px 24px;
            min-width: 96px;
            &.router-link-exact-active, &.router-link-active {
              color: $app-main-color;
            }
            &:first-child {
              color : #ccc !important;
            }
          }
        }
      }

      #footer {
        z-index: 1;
        border: 0px solid #f00;
        color: $app-main-color;
        width: 100%;
        height: 96px;
        /*margin-top: auto;*/
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .copyright {
          display: flex;
          align-items: center;
          height: 48px;
          min-height: 48px;
          color: #000;
          background-color: #fff;
        }
        .product {
          font-size: 12px;
          background-color: #fff;
        }
      }
    }
    .container {
      
      z-index: 1;
      outline: 0px solid #f00;
      padding: 0;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      height: 640px;
      width: 1500px;

      max-width: 100%;
      max-height: 100%;

      min-width: 320px;

      section {
        align-items: flex-start;
        justify-content: space-between;
        .section-title {
          color: #fff;
          text-shadow: none;
        }
      }
      .section0 {
        background-color: #1e9cd9;
      }
      .section1 {
        background-color: #0277bd;
      }
      .section2 {
        background-color: #2f5aa8;
      }
      .section3 {
        background-color: #242424;
      }
      .section0, .section1, .section2, .section3 {
        .section-title {
          color: #fff;
          text-shadow: 0px 0px 12px rgba(0,0,0,.6);
          p {
            font-size: 12px;
            text-decoration: underline;
          }
        }
      }
    }

    .transition {
      border: 0px solid #f00;
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 1px;
      padding: 48px 0 96px 0;
      z-index: 1;
      transition: 300ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
      .guide-group{
        position: relative;
        background-color: #fff;
      }
    }
    .transition.active {
      height: 100%;
    }
  }
}

@media (max-width: 750px) {
  .container {
    justify-content: flex-start !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    align-content: flex-start !important;
    height: fit-content !important;
    section {
      width: 100% !important;
      /*height: fit-content !important;*/
    }
  }
}
</style>
