/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
<template>
  <div id="app">
    <div class="menu-container" style="padding: 10px 5px 0px 5px;">
      <router-link to="/">
      <div class="menu-item" @click="navigate('inicio')">
        <em class="ni ni-home"></em>
        <span> Inicio</span>
      </div>
    </router-link>
      <div class="menu-item" @click="showcart()">
        <i v-if="count" class="countbubbleMb">{{count}}</i>
        <em class="ni ni-cart"></em>
        <span>Carrito</span>
      </div>
    <!--   <div class="menu-item" @click="navigate('pedidos')">
        <em class="ni ni-list"></em>
        <span>Pedidos</span>
      </div> -->
      
      <div v-if="Userdata.length" class="menu-item" @click="navigate('/Account')">
        <em class="ni ni-user"></em>
        <span>Perfil</span>
      </div>
      <div v-else class="menu-item" @click="navigate('/Login')">
        <em class="ni ni-user"></em>
        <span>Ingresar</span>
      </div>
      <div v-if="Userdata.length" class="menu-item" @click="sessionclose()">
        <em class="ni ni-signout"></em>
        <span>Salir</span>
        
      </div>
    </div>
  </div>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'MobileAction',
  data () {
    return {
      SectionData
    }
  },
  methods: {
    showcart(){
      this.$store.dispatch('showcart');
    },
    navigate(page) {
      this.$router.push(page);
      console.log("Navegando a", page);
    },
    sessionclose(){
       localStorage.removeItem("UserData")
       localStorage.removeItem("token")
       this.$store.dispatch('updatedataUser', [])
       this.$store.dispatch('setcartcount', 0);
       this.$store.dispatch('updatecart', []);
       this.$router.push('/');
    },
  },
  computed: {
    count() {
      return this.$store.state.cartcount;
    },
    Userdata() {
      return this.$store.state.userdata;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  },

}
</script>
<style scoped>
.menu-container {
  display: none;
}

/* Mostrar el menú en pantallas menores a 768px */
@media (max-width: 768px) {
  .header-main{
display: none;
  }
  .menu-container {

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  }
}
.menu-container {
  z-index: 1000;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.menu-item img {
  width: 24px;
  height: 24px;
}

.menu-item span {
  margin-top: 5px;
  font-size: 12px;
  color: black;
}

.countbubbleMb{
  background: red;
    position: absolute;
    top: -6px;
    right: -6px;
    color: white;
    width: 23px;
    height: 23px;
    border-radius: 40px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    margin: auto;
    padding: inherit;
}
</style>
