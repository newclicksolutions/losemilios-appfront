<template>
    <ul class="menu-list ms-lg-auto">
          <li class="menu-item " v-if="Userdata[0]?.user_id">
              <a href="#" class="menu-link"><em class="menu-on menu-icon ni ni-user"></em></a>
              <div class="menu-sub ">
                <ul class="menu-list">
                        <li class="menu-item"><router-link to="/Account" class="menu-link">Mi cuenta</router-link></li>
                        <li class="menu-item"><router-link to="/notifications" class="menu-link">Mis pedidos</router-link></li>
                        <li class="menu-item"><a @click="sessionclose" class="menu-link">Cerrar sesion</a></li>
                    </ul>
              </div>
          </li>
          <li class="menu-item " v-else>
              <a href="/login" class="menu-link"><em class="menu-on menu-icon ni ni-user"> </em>Ingresar</a>
             
          </li>
          <li class="menu-item ">
              <a href="#" @click="showcart" class="menu-link"><em class="menu-on menu-icon ni ni-cart"></em></a>
              <i v-if="count" class="countbubble">{{count}}</i>
          </li>
     </ul> 
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'MenuList',
  data () {
    return {
      SectionData,
      storedCart: [],
      UserData:[]
    }
  },
  mounted() {
        if (localStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(localStorage.getItem("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;
            } else {
                this.emptyCart = false;
                this.$store.dispatch('setcartcount',this.storedCart.length); 
            }
        }
        if (localStorage.getItem("UserData")) {
          this.UserData = JSON.parse(localStorage.getItem("UserData"));
          this.$store.dispatch('updatedataUser',this.UserData); 
        }
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
  methods: {
    sessionclose(){
       localStorage.removeItem("UserData")
       localStorage.removeItem("token")
       this.$store.dispatch('updatedataUser', [])
       this.$store.dispatch('setcartcount', 0);
       this.$store.dispatch('updatecart', []);
       this.$router.push('/');
    },
    showcart(){
      this.$store.dispatch('showcart');
    },
    incrementCount() {
      this.$store.dispatch('incrementCount');
    }
  }
}
</script>
<style>
em{
  font-size: 25px;
}
.countbubble{
  background: red;
    position: absolute;
    top: 0px;
    right: 0px;
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
