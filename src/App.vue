<template>
  <div id="app">

    <HeaderSite/>
    <MainSite/>
    <FooterSite/>
    
  </div>
</template>

<script>
import HeaderSite from "@/components/HeaderComponent.vue"
import MainSite from "@/components/MainComponent.vue"
import FooterSite from "@/components/FooterComponent.vue"

export default {
  name: 'App',
  components: {
    HeaderSite,
    MainSite,
    FooterSite,
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
