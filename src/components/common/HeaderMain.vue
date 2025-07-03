<template>
  <div v-if="load" class="load">
    <div class="load-gf"> <img :src="imgLg"  class="centered-image" alt="avatar" />
    <p>Un momento porfavor</p>
    </div>
  </div>
  <div  class="modal-overlay">
    <div class="modal-content">
      <!-- <button class="modal-close" @click="closeModal">&times;</button> -->
      <h2 class="modal-title">¡Atención!</h2>
      <p class="modal-text">
        Por ahora, estaremos atendiendo todos los pedidos a través de WhatsApp.
        Escríbenos al <strong>313 768 1221</strong> y con gusto te ayudaremos.
      </p>
      <a
        href="https://wa.me/573137681221"
        target="_blank"
        class="modal-button"
      >
        Pedir por WhatsApp
      </a>
    </div>
  </div>
  <cart></cart>
  <MobileAction></MobileAction>
  <div class="header-main  fixed-top is-sticky" :class="isTransparent">
    <div class="container">
      <div class="header-wrap">
        <!-- logo -->
        <Logo></Logo>
        <!-- mobile action -->

        <!-- heder search -->
        <HeaderSearch></HeaderSearch>
        <!-- Menu -->
        <Menu classname="btn-primary"></Menu>
        <div class="header-overlay"></div>
      </div><!-- .header-warp-->
    </div><!-- .container-->
  </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileAction from '@/components/common/MobileActionTwo.vue'
import HeaderSearch from '@/components/common/HeaderSearch.vue'
import Menu from '@/components/common/Menu.vue'

export default {
  name: 'HeaderMain',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileAction,
    HeaderSearch,
    Menu,
  },
  data() {
    return {
      imgLg: require('@/images/thumb/load.gif')
    }
  },

  computed: {
    load() {
      return this.$store.state.loading;
    },
  },
}
</script>
<style scoped>
.fixed-top{
    position: fixed !important;
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
   }
.load {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #000000a6;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Ajusta la altura según tus necesidades */
}

.load-gf {
  text-align: center;
  color: white;
}

.centered-image {
  width: 25%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;

}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;
  animation: fadeIn 0.3s ease-out;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}
.modal-close:hover {
  color: #e00;
}

.modal-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.modal-text {
  color: #333;
  margin-bottom: 1.5rem;
}

.modal-button {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;
}
.modal-button:hover {
  background-color: #1ebe5d;
}

</style>