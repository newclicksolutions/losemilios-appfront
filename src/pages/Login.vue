<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- login section -->
    <loginSection></loginSection>
    <!-- Blog  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Login',
  data () {
    return {
      SectionData,
      Userdata:[]
    }
  },
  mounted(){
    if (localStorage.getItem("UserData")) {
            this.Userdata = JSON.parse(localStorage.getItem("UserData"));
            if (this.Userdata[0]?.user_id) {
              this.$router.push('/')
            }
        }
  }
}
</script>
