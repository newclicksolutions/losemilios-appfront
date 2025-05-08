<template>
  <div class="hero-wrap sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="item-detail-content mt-4 mt-lg-0">
            <h1 class="item-detail-title mb-2">Comidas exprés, placer sin límites</h1>
            <p class="item-detail-text mb-2">Delicias instantáneas, sabores que perduran. ¡Tu antojo tiene su destino en
              LosEmilios!</p>
            <!--   <button @click="irapagar" class="btn btn-primary d-block">Hacer pedido</button> -->
          </div>
        </div>
        <div class="col-lg-6 pe-xl-5  mobileimage">
          <div class="item-detail-content">
            <div class="item-detail-img-container mb-2">
              <img :src="imgLg" alt="" class="w-70 rounded-3" />
            </div>
          </div>
        </div>
      </div>
      <img :src="img" alt="" sizes="" srcset="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroFour',
  props: ['title', 'lists', 'classname'],
  data() {
    return {
      img1: require('@/images/thumb/products/Frame 5.png'),
      imgLg: require('@/images/thumb/products/image3.png'),
    }
  }
}
</script>

<style scoped>
.sub-header {
  padding: 30px 0px 0px 0px
}

@media (max-width: 767px) {
  .mobileimage {
    display: none !important;
  }
}
</style>