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


              <div class="card-price-wrap card-price-overflow acordeon-main"
                style="border-bottom: 1px #e1e1e1c4 solid;">

                <!-- OPCIONES AGRUPADAS -->
                <div v-if="Object.keys(opcionesAgrupadas).length" class="acordeon-tab clickable">
                  <div class="acordeon-header">
                    <span class="card-price-number">Opciones</span>
                    <span class="arrow" :class="{ open: isOpen.opciones }" @click="toggleAccordion('opciones')">▶</span>
                  </div>
                  <transition name="fade">
                    <div v-show="isOpen.opciones" class="acordeon-content">
                      <div v-for="(grupo, categoria) in opcionesAgrupadas" :key="categoria">
                        <span class="card-price-number">{{ categoria }}</span>

                        <div class="categoria-opciones">
                          <div v-for="opcion in grupo" :key="opcion.nombre" class="opcion-item">
                            <label class="custom-checkbox-row">
                              <span class="opcion-nombre description">{{ opcion.nombre }}</span>
                              <input type="checkbox" :id="opcion.nombre" :checked="isChecked(opcion)"
                                @change="handleSeleccion(opcion)" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- ADICIONES -->
                <div class="acordeon-tab clickable" v-if="product.additions?.length">
                  <div class="acordeon-header">
                    <span class="card-price-number">Adiciones</span>
                    <span class="arrow" :class="{ open: isOpen.adiciones }"
                      @click="toggleAccordion('adiciones')">▶</span>
                  </div>
                  <transition name="fade">
                    <div v-show="isOpen.adiciones" class="acordeon-content">
                      <ul>
                        <li v-for="item in product.additions" :key="item.id">
                          <div class="dv1">
                            <span class="description">{{ item.title }}</span>
                          </div>
                          <div class="dv2">
                            <span class="addprice">+{{ $formatoMoneda(item.price) }}</span>
                            <button @click.stop="decrement(item)">-</button>
                            <input type="number" v-model="item.value" @input="limitInput(item)" />
                            <button @click.stop="increment(item)">+</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </transition>
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
                    <a @click="validarSeleccion" href="#" id="cartButton"
                      class="btn btn-primary d-block  pulsating-button">
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
      singleproduct: [],
      additions: [],
      totaladitions: 0,
      cartadditions: [],
      cart: [],
      storedCart: [],
      opcionesSeleccionadas: [],
      isOpen: {
        opciones: true,
        adiciones: true
      },
    };
  },

  created() {


  },
  async mounted() {
    this.singleproduct = await this.$store.dispatch('getproductID', this.id);
    this.total = this.product.total
    if (localStorage.getItem("shopingcart")) {
      this.storedCart = this.$GetEncryptedData("shopingcart");

    }
    // Buscar la opción por defecto (que no sea "Salsas")
    const opcionPorDefecto = Object.values(this.opcionesAgrupadas)
      .flat()
      .find(o => o.categoria !== "Salsas");

    if (opcionPorDefecto) {
      this.opcionesSeleccionadas.push(opcionPorDefecto);
    }

  },
  methods: {
    isChecked(opcion) {
      return this.opcionesSeleccionadas.some(
        (o) => o.nombre === opcion.nombre && o.categoria === opcion.categoria
      );
    },

    handleSeleccion(opcion) {
      const mismaCategoria = (o) => o.categoria === opcion.categoria;
      const mismaOpcion = (o) => o.nombre === opcion.nombre && o.categoria === opcion.categoria;

      const yaSeleccionada = this.opcionesSeleccionadas.some(mismaOpcion);
      const seleccionadasDeCategoria = this.opcionesSeleccionadas.filter(mismaCategoria);

      if (yaSeleccionada) {
        // Deseleccionar si ya estaba marcada
        this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter((o) => !mismaOpcion(o));
        return;
      }

      if (opcion.categoria === "Salsas") {
        if (seleccionadasDeCategoria.length < 5) {
          this.opcionesSeleccionadas.push(opcion);
        } else {
          this.$refs.notification.showNotification("Solo puedes seleccionar hasta 5 salsas.", "#00870c");
          this.$nextTick(() => this.forceUpdateInput(opcion));
        }
      } else {
        // Desmarcar todas las de esa categoría y marcar la nueva
        this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter((o) => !mismaCategoria(o));
        this.opcionesSeleccionadas.push(opcion);
      }
    },
    forceUpdateInput(opcion) {
      const input = document.getElementById(opcion.nombre);
      if (input) input.checked = false;
    },

    toggleAccordion(section) {
      this.isOpen[section] = !this.isOpen[section];
    },
    add() {
      this.cant = (this.cant || 0) + 1;
      this.product.total = (parseInt(this.product.price) + parseInt(this.totaladitions)) * parseInt(this.cant);
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

    validarSeleccion() {
     const categoriasRequeridas = Object.keys(this.opcionesAgrupadas);
      const categoriasSeleccionadas = new Set(
        this.opcionesSeleccionadas.map((o) => o.categoria)
      );
      const categoriasFaltantes = categoriasRequeridas.filter(
        (categoria) => !categoriasSeleccionadas.has(categoria)
      );
      if (categoriasFaltantes.length > 0) {
        this.$refs.notification.showNotification(
          `Debes seleccionar al menos una opción en: ${categoriasFaltantes.join(", ")}`,
          "#b00020"
        );
        return;
      }
      // Si todo está bien, continuar 
      this.saveCart(); // o el método que corresponda
    },
    saveCart() {
      let storedCart = this.$GetEncryptedData("shopingcart");
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
        cartopcionesSeleccionadas: this.opcionesSeleccionadas,
      });
      // Guardar el carrito actualizado en el localStorage
      const parsed = JSON.stringify(this.cart);
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(parsed), 'Rt8wkjc##34laAD9?884**').toString();
      localStorage.setItem("shopingcart", encrypted);
      //localStorage.setItem("shopingcart", parsed);
      this.storedCart = JSON.parse(this.$GetEncryptedData("shopingcart"))
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
      console.log(this.singleproduct)
      let data = {}


      let parsedOptions = [];

      try {
        if (this.singleproduct.options && this.singleproduct.options !== "null") {
          parsedOptions = JSON.parse(this.singleproduct.options);
        }
      } catch (error) {
        console.error("Error al parsear options:", error);
      }

      data = {
        imgLg: this.singleproduct.img,
        title: this.singleproduct.title,
        price: this.singleproduct.price,
        content: this.singleproduct.content,
        additions: this.singleproduct.addition,
        total: this.singleproduct.price,
        options: parsedOptions.length > 0 ? parsedOptions : [],
      };


      return data
    },
    opcionesAgrupadas() {

      return this.product.options.reduce((acc, opcion) => {
        if (!acc[opcion.categoria]) acc[opcion.categoria] = [];
        acc[opcion.categoria].push(opcion);
        return acc;
      }, {});
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
  margin: 4px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.opcion-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3px 28px 3px 5px;
}

.opcion-item input {
  width: 20px;
  height: 30px;
  border: transparent;
  border-radius: 25px;
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
  font-size: 13px;
  width: 188px;
}

.card-price-overflow {
  overflow: hidden;
  max-height: 100%;
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


.acordeon-tab {
  margin-bottom: 1rem;
}

.acordeon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.arrow.open {
  transform: rotate(90deg);
}

.acordeon-content {
  padding: 0.5rem 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.custom-checkbox-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.custom-checkbox-row input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-checkbox-row .checkmark {
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.custom-checkbox-row input:checked~.checkmark {
  background-color: black;
  border-color: black;
}

.custom-checkbox-row .checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox-row input:checked~.checkmark::after {
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.opcion-nombre {
  flex-grow: 1;
  margin-right: 12px;
}
</style>
