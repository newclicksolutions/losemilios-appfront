<template>
    <div class="header-main fixed-top is-sticky" :class="isTransparent">
                <div class="container">
                    <div class="header-wrap">
                         <!-- logo -->
                        <Logo></Logo>
                        <!-- mobile action -->
                        <!-- heder search -->
                        <HeaderSearch></HeaderSearch>
                        <!-- menu -->
                        <Menu classname="btn-primary"></Menu>
                        <div class="header-overlay"></div>
                    </div><!-- .header-warp-->
                </div><!-- .container-->
            </div><!-- .header-main-->
            
</template>

<script>
import Logo from '@/components/common/Logo.vue'
import MobileAction from '@/components/common/MobileAction.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'

  export default {
    name: 'Header',
    props: ['isTransparent'],
    components: {
      Logo,
      MobileAction,
      HeaderSearch,
      Menu

    },
  };
</script>
<style>
   .fixed-top{
    position: fixed !important;
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
   }

</style>