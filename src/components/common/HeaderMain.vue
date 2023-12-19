<template>
  <div v-if="load" class="load">
    <div class="load-gf"> <img :src="imgLg"  class="centered-image" alt="avatar" />
    <p>Un momento porfavor</p>
    </div>
  </div>
  <cart></cart>
  <MobileAction></MobileAction>
  <div class="header-main  fixed-top is-sticky" :class="isTransparent">
    <div class="container">
      <div class="header-wrap">
        <!-- logo -->
        <Logo></Logo>
        <!-- mobile action -->

        <!-- heder search -->
        <HeaderSearch></HeaderSearch>
        <!-- Menu -->
        <Menu classname="btn-primary"></Menu>
        <div class="header-overlay"></div>
      </div><!-- .header-warp-->
    </div><!-- .container-->
  </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileAction from '@/components/common/MobileActionTwo.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'

export default {
  name: 'HeaderMain',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileAction,
    HeaderSearch,
    Menu,
  },
  data() {
    return {
      imgLg: require('@/images/thumb/load.gif')
    }
  },

  computed: {
    load() {
      return this.$store.state.loading;
    },
  },
}
</script>
<style scoped>
.fixed-top {
  position: fixed !important;
}

.load {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #000000a6;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Ajusta la altura según tus necesidades */
}

.load-gf {
  text-align: center;
  color: white;
}

.centered-image {
  width: 25%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;

}</style>