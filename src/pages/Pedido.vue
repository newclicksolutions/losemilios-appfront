<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
  
    </header>
    <!-- Blog  -->
    <section class="section-space-b blog-section">
        <div class="container">
            <!-- blog section -->
            <div class="row">
                <div class="col-lg-8">
                    <PedidoDetailSection></PedidoDetailSection>
                </div><!-- end col-lg-8 -->
                <div class="col-lg-4 ps-lg-4">
                    <Sidebar></Sidebar>
                </div><!-- end col-lg-4 -->
            </div><!-- row -->
        </div><!-- .container -->
    </section><!-- end blog-section -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'


export default {
  name: 'Pedido',
  components: {
    
  },
  data () {
    return {
      SectionData
    }
  },
  created() {
    if (!localStorage.getItem("shopingcart")) {

                this.$router.push('/');
            
        }
  },
}
</script>
 