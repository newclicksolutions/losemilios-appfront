<template>
  <div class="hero-wrap">
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-12 d-flex align-items-center text-center mx-auto">
      <div class="item-detail-content mt-4 mt-lg-0 mx-auto">
        <img :src="imgLg" alt=""  width="150" class="rounded-3 pt-5" />
        <h1 class="item-detail-title mb-2">No pudimos procesar tu pago</h1>
        <p class="item-detail-text mb-4"> Te recomendamos pagar con cualquier otro medio para completar esta compra</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'HeroFail',
  props: ['title', 'lists', 'classname'],
  data() {
    return {
      imgLg: require('@/images/thumb/fail.png'),
    }
  }
}
</script>

