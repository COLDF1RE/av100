<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {Footer, Header},
  methods: {},
}
</script>

<style lang="scss">
  body,
  html {}
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    max-width: 1920px;
    min-width: 320px;
  }
  .main {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
</style>
