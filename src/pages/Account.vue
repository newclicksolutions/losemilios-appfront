<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-pattern-3">
          <!-- Header main -->
          <HeaderMain></HeaderMain>

          <!-- hero -->
        </header>
        <!-- account section -->
        <section class="user-panel-section section-space">
                <div class="container">
                    <div class="row">
                        <!-- user sidebar -->
                        <UserSidebar :title="SectionData.accountSidebarData.title" :lists="SectionData.accountSidebarData.navList" :navs="SectionData.editProfileData.editProfileTabNavMobile"></UserSidebar>
                        <AccountSection></AccountSection> 
                    </div><!-- end row -->
                </div><!-- end container -->
        </section><!-- end user-panel-section -->
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Account',
  data () {
    return {
      SectionData,
      coverImg: require('@/images/thumb/bread-bg-2.jpg')
    }
  }
}
</script>
