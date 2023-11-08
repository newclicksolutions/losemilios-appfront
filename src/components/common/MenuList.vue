<template>
    <ul class="menu-list ms-lg-auto">
          <li class="menu-item ">
              <a href="#" class="menu-link"><em class="menu-on menu-icon ni ni-menu"></em></a>
              <div class="menu-sub menu-mega">
                
              </div>
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
    }
  },
  mounted() {
        if (sessionStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(sessionStorage.getItem("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;
            } else {
                this.emptyCart = false;
                this.$store.dispatch('setcartcount',this.storedCart.length); 
            }
        }
    },
  computed: {
    count() {
      return this.$store.state.cartcount;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  },
  methods: {
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
