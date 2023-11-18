<template>
  <div class="hero-wrap">
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 d-flex align-items-center text-center mx-auto">
      <div class="item-detail-content mt-4 mt-lg-0 mx-auto">
        <img :src="imgLg" alt="" class="w-50 rounded-3" />
        <h1 class="item-detail-title mb-2">Muchas gracias</h1>
        <p class="item-detail-text mb-4">Recibimos tu pedido correctamente!</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>

export default {
  name: 'HeroThree',
  props: ['title', 'lists', 'classname'],
  data() {
    return {
      imgLg: require('@/images/thumb/check.png'),
    }
  }
}
</script>

