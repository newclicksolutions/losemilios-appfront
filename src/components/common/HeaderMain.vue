<template>
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
    Menu
  }
}
</script>
<style scoped>

   .fixed-top{
    position: fixed !important;
   }


</style>