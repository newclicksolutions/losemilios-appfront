<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>

    <section class="item-detail-section section-space">

      <div class="container">
        <router-link to="/"><em style="font-size: 36px;" class="ni ni-arrow-left-round-fill"
            data-v-289073a8=""></em></router-link>
        <div class="row">
          <div class="col-lg-6 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4">
                <img :src="$store.state.configvar[0]?.apiurl + product.imgLg" alt="" class="w-100 rounded-3" />
              </div>

            </div>
            <!-- end item-detail-content -->
          </div>
          <!-- end col -->
          <div class="col-lg-6">
            <div class="item-detail-content mt-4 mt-lg-0">
              <h1 class="item-detail-title mb-2">{{ product.title }}</h1>

              <p class="item-detail-text mb-4">{{ product.content }}</p>
              <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                <div class="me-5 me-sm-2">
                  <span class="card-price-number">{{ $formatoMoneda(product.price) }}</span>
                </div>
              </div>
              <div class="card-price-wrap card-price-overflow" style="border-bottom: 1px #e1e1e1c4 solid;">
                <div class="me-sm-2" v-if="product.additions?.length">
                  <span class="card-price-number">Adiciones</span>
                  <ul>
                    <li v-for="item in product.additions" :key="item.id">
                      <div class="dv1">
                        <span class="description">{{ item.title }}</span>
                      </div>
                      <div class="dv2">
                        <span class="addprice">+{{ $formatoMoneda(item.price) }}</span>
                        <button @click="decrement(item)">-</button>
                        <input type="number" v-model="item.value" @input="limitInput(item)" />
                        <button @click="increment(item)">+</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-detail-btns mt-4">
                <ul class="btns-group d-flex dvul">
                  <li class="dv1">
                    <button @click="remove()">-</button>

                    <input min="1" max="99" type="number" v-model="cant" />
                    <button @click="add()">+</button>
                  </li>
                  <li class="dv2">
                    <a @click="saveCart" href="#" id="cartButton" class="btn btn-primary d-block  pulsating-button">
                      Agregar
                      <span class="price-value">{{ $formatoMoneda(parseInt(product.total)) }}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- end item-detail-btns -->
            </div>
            <!-- end item-detail-content -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- .container -->
      <!-- Modal -->

      <!-- end modal-->
    </section>
    <!-- end item-detail-section -->
    <!-- Related product -->
    <RelatedProduct></RelatedProduct>
    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <Notification ref="notification" />
  <!-- end page-wrap -->
</template>

<script>
//import ProductDetailSection from '@/components/section/Products'
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import Notification from '../components/common/Notification.vue'
import CryptoJS from 'crypto-js';

export default {
  components: {
    Notification
  },
  name: "ProductDetail",
  data() {
    return {
      SectionData,
      id: this.$route.params.id,
      title: "",
      price: "",
      total: 0,
      imgLg: "",
      content: "",
      cant: 1,
      additions: [],
      totaladitions: 0,
      cartadditions: [],
      cart: [],
      storedCart: []
    };
  },
  created() {

  },
  mounted() {
    this.total = this.product.total
    if (localStorage.getItem("shopingcart")) {
      this.storedCart = this.$GetEncryptedData("shopingcart");

    }

  },
  methods: {

    add() {
      this.cant = (this.cant || 0) + 1;
      this.product.total = (parseInt(this.product.price) + parseInt(this.totaladitions)) * parseInt(this.cant);
      console.log(this.cant);
    },
    remove() {
      if (this.cant > 1) {
        this.cant--;
        this.product.total = (parseInt(this.product.price) + parseInt(this.totaladitions)) * this.cant;
      }
    },
    increment(item) {
      if (item.value < 1) {
        item.value++;
        this.totaladitions = parseInt(this.totaladitions) + parseInt(item.price);
        this.cartadditions = this.cartadditions.filter(
          (cartItem) => cartItem.title !== item.title
        );
        this.cartadditions.push({
          title: item.title,
          value: item.value,
          id: item.product_id,
          price: item.price,
          content: item.content,
          img: item.img
        });
        this.product.total = (parseInt(this.product.price) + parseInt(this.totaladitions)) * parseInt(this.cant);
      }

    },
    decrement(item) {
      if (item.value > 0) {
        item.value--;
        this.totaladitions =
          parseInt(this.totaladitions) - parseInt(item.price);
      }
      this.cartadditions = this.cartadditions.filter(
        (cartItem) => cartItem.title !== item.title
      );
      this.cartadditions.push({
        title: item.title,
        value: item.value,
        id: item.product_id,
        price: item.price,
        content: item.content,
        img: item.img
      });
      this.product.total = (parseInt(this.product.price) + parseInt(this.totaladitions)) * this.cant;

    },
    limitInput(item) {
      if (item.value > 1) {
        item.value = 1;
      }
    },
    saveCart() {
      let storedCart =  this.$GetEncryptedData("shopingcart");
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
      this.cart = this.cart.filter(cartItem => cartItem.id !== this.$route.params.id);
      this.cart.push({
        id: this.$route.params.id,
        title: this.product.title,
        price: parseInt(this.product.price),
        total: parseInt(this.totaladitions) + parseInt(this.product.price),
        imgLg: this.product.imgLg,
        content: this.product.content,
        cant: this.cant,
        totaladitions: this.totaladitions,
        cartadditions: this.cartadditions,
      });

      // Guardar el carrito actualizado en el localStorage
      const parsed = JSON.stringify(this.cart);
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(parsed), 'Rt8wkjc##34laAD9?884**').toString();
      localStorage.setItem("shopingcart", encrypted);
      //localStorage.setItem("shopingcart", parsed);
      this.storedCart = JSON.parse( this.$GetEncryptedData("shopingcart"))
      this.$store.dispatch('setcartcount', this.storedCart.length);
      this.$store.dispatch('updatecart', this.storedCart);
      const cartButton = document.getElementById('cartButton');
      cartButton.classList.add('clicked');
      setTimeout(() => {
        cartButton.classList.remove('clicked');
      }, 300);
      this.$refs.notification.showNotification('“' + this.product.title + '” se ha añadido a tu carrito.', '#00870c')
    }
  },
  computed: {
    product() {
      let data = {}
      this.$store.state.products.forEach((element) => {
        console.log(this.id)
        if (this.id == element.product_id) {
          data = {
            imgLg: element.img,
            title: element.title,
            price: element.price,
            content: element.content,
            additions: element.addition,
            total: element.price,
          }
        }
      });
      return data
    },
    subtotal() {
      return this.cart.reduce((acc, item) => acc + item.total, 0);
    },
    totalSum() {
      return this.cart.reduce((acc, item) => acc + item.total, 0);
    },
    enhancedItems() {
      return this.product.additions.map((item) => ({
        ...item,
        value: item.value || 0,
      }));
    },
    // Aquí estamos ordenando los items de forma descendente
    sortedItems() {
      return this.product.additions.slice().sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });
    },
  },
};
</script>
<style lang="css" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

input {
  width: 9px;
  height: 40px;
  border: transparent;
}

button {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  color: white;
  background: black;
  font-size: 18px;
  border: none;
  margin: 8px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.dvul {
  justify-content: space-between;
}

.dv1 {
  align-items: flex-start;
}

.dv2 {
  align-items: flex-end;
}

.price-value {
  margin-left: 50px;
  /* O puedes usar padding-left si prefieres */
  font-size: 13px;
}

.description {
  float: left;
  color: black;
  font-size: 12px;
}

.card-price-overflow {
  overflow: auto;
  max-height: 400px;
}

.controls {
  display: flex;
  align-items: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.addprice {
  font-size: 12px;
}

/* Para Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.pulsating-button {
  transition: transform 0.1s ease;
}

.pulsating-button.clicked {
  transform: scale(0.9);
}

.pulsating-button {
  position: relative;
  overflow: hidden;
}

.pulsating-button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  opacity: 0;
  transition: width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out;
}

.pulsating-button:hover:before {
  width: 200%;
  height: 200%;
  opacity: 1;
}
</style>
