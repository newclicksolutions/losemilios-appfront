<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroThree classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroThree>
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

export default {
  name: 'ordencompleta',
  components: {
    HeroThree
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
 