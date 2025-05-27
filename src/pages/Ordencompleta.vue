<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        
        
        <HeroThree v-if="state == 'APPROVED'" classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroThree>
        <HeroFail v-else classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFail>
    </header>
    <!-- Blog  -->
    <section class="section-space-b blog-section">
        <div class="container">
            <!-- blog section -->
            <div class="row">
                <div class="col-lg-12">
                    <Resumensection></Resumensection>
                </div><!-- end col-lg-8 --> 
            </div><!-- row -->
        </div><!-- .container -->
    </section><!-- end blog-section -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroThree from '@/components/section/HeroThree.vue'
import HeroFail from '@/components/section/HeroFail.vue'

export default {
  name: 'ordencompleta',
  components: {
    HeroThree,
    HeroFail
  },
  data () {
    return {
      SectionData,
      id: this.$route.params.id,
      state: this.$route.query.lapTransactionState
    }
  }
}
</script>
 