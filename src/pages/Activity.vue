<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
    </header>
    <ActivitySection></ActivitySection>
    <!-- footer -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'


export default {
  name: 'Activity',
  components: {
    
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
