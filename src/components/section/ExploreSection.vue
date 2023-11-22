<template>
  <section class="explore-section pt-4">
    <div class="container">
      <!-- filter -->
      <div class="filter-box">
        <h3 class="mb-4">Filtrar por {{ stateshowcart }}</h3>
        <div class="filter-box-filter m-0">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="categoryMenu in categoryMenu" :key="categoryMenu.id">
                <button class="nav-link slider-button" :class="{ active: categoryMenu.title === 'Todos' }"
                  :id="'pills-' + categoryMenu.title + '-tab'" @click="setFilter(categoryMenu.title)">
                  <img :src="categoryMenu.img" class="imgpills" alt="Image description" />
                  {{ categoryMenu.title }}
                </button>
                <div class="slider-buttondot"></div>
              </div>
            </div>
            <!-- Add Arrows (Optional) -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
          </div>
        </div>
        <!-- end filter-box-filter -->
      </div>
      <!-- end filter-box -->
      <div class="gap-2x"></div>
      <!-- end gap -->
      <!-- Product -->
      <div class="tab-content" id="pills-tabContent">
        <div :class="{ active: categoryMenu.title === 'Todos' }" class="tab-pane show"
          :id="'pills-' + categoryMenu.title + ''" role="tabpanel"
          :aria-labelledby="'pills-' + categoryMenu.title + '-tab'" v-for="categoryMenu in categoryMenu"
          :key="categoryMenu.id">
          <div class="row g-gs">
            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="product in filteredProducts" :key="product.product_id ">
              <div class="card card-product mb-0 d-flex">
                <div class="card-image">
                  <img :src="require('@/images/thumb/products/'+product.img)" class="card-img-top" alt="art image" />
                </div>
                <div class="card-body p-4">
                  <h5 class="card-title text-truncate mb-0">
                    {{ product.title }}
                  </h5>
                  <div class="card-author mb-1 d-flex align-items-center">
                    <div class="custom-tooltip-wrap">
                      <p class="item-detail-text mb-4">{{ product.content }}</p>
                    </div>
                    <!-- end custom-tooltip-wrap -->
                  </div>
                  <!-- end card-author -->
                  <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                    <div class="me-5 me-sm-2">
                      <span class="card-price-number">{{ $formatoMoneda(product.price) }}</span>
                    </div>
                  </div>
                  <!-- end card-price-wrap -->
                  <router-link to="product" class="btn btn-sm btn-primary">LA QUIERO</router-link>
                </div>
                <!-- end card-body -->
                <router-link class="details" :to="{
                  name: 'ProductDetail',
                  params: {
                    id: product.product_id ,
                    title: product.title,
                    metaText: product.metaText,
                    price: product.price,
                    priceTwo: product.priceTwo,
                    imgLg: product.imgLg,
                    metaText: product.metaText,
                    metaTextTwo: product.metaTextTwo,
                    metaTextThree: product.metaTextThree,
                    content: product.content,
                  },
                }">
                </router-link>
              </div>
              <!-- end card -->
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end tab-pane -->

      </div>
      <div class="gap-2x"></div>
      <div v-if="!filteredProducts.length" class="noresults flex justify-content-center align-items-center text-center">
        <img :src="require('@/images/thumb/search-no-result.jpg')" class="card-img-top" alt="art image" />
        <h3 class="mb-4">Lo sentimos</h3>
        <span color="graya100" data-testid="typography" class="sc-dcJsrY cQMYKl sc-jXbUNg eQnKyT">No hemos encontrado
          resultados para "{{ stateshowcart }}"</span>
      </div>
      <div class="gap-2x"></div>


      <!-- end tab-content -->
    </div>
    <!-- .container -->
  </section>
  <!-- end explore-section -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import { Swiper, Navigation } from 'swiper';
Swiper.use([Navigation]);

export default {
  name: "ExploreSection",
  data() {
    return { 
      SectionData,
      filtersproduct: "",
      filtersCategory: "Todos",
      categoryMenu: [
        {
          id: 1,
          title: "Todos",
          img: require('@/images/thumb/products/todos.png'),
        },

        {
          id: 3,
          title: "Hambueguesas",
          img: require('@/images/thumb/products/image7.png'),
        },
        {
          id: 2,
          title: "Perros",
          img: require('@/images/thumb/products/perros.png'),
        },
        {
          id: 4,
          title: "Salchipapas",
          img: require('@/images/thumb/products/salchipapa.png'),
        },
        {
          id: 5,
          title: "Asados",
          img: require('@/images/thumb/products/asado.png'),
        },
        {
          id: 6,
          title: "Bebidas",
          img: require('@/images/thumb/products/Group_33.png'),
        },
        {
          id: 6,
          title: "Adiciones",
          img: require('@/images/thumb/products/Group_33.png'),
        },
      ],
      isFIlter: false,
      selectedTab: null,
      currentPage: 1,
      maxPerPage: 8,
      selectedId: 0,
    };
  },
  mounted() {
    if (this.$store.state.products.length == 0) {
      console.log("rmax")
      this.$store.dispatch('fetchData');
    }
    
    new Swiper('.swiper-container', {
      slidesPerView: 3,  // Por defecto mostrará 1 slide
      spaceBetween: 1,  // Espacio entre slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // cuando el ancho es >= 480px
        480: {
          slidesPerView: 2,  // muestra 2 slides a la vez
          spaceBetween: 20  // espacio entre slides
        },
        // cuando el ancho es >= 640px
        640: {
          slidesPerView: 6,  // muestra 3 slides a la vez
          spaceBetween: 60  // espacio entre slides
        },
        // ... puedes continuar agregando más breakpoints según lo necesites
      }
    });
  },
  methods: {
    setFilter(ct) {
      this.filtersCategory = ct;
      this.$store.dispatch('searhinput', this.inputValue);
    },
    filterCategory(tab, id) {
      this.selectedTab = tab;
      this.isFIlter = true;
      this.selectedId = id;
    },
    loadMore() {
      this.currentPage += 1;
      this.isFIlter = false;
    },
    sorting() {
      this.products.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
    sorting2() {
      this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },

    // set active class on button
    getActiveClass(id) {
      if (id === this.activeId) {
        return "active";
      } else {
        return "";
      }
    },
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    stateshowcart() {
      return this.$store.state.searhinput;
    },
    prd() {
      return this.$store.state.data;
    },
    filteredProducts() {
      if (this.$store.state.searhinput) {
        if (this.filtersCategory == this.$store.state.searhinput) return this.$store.state.products;
        return this.$store.state.products.filter(
          (product) => product.title.toLowerCase().includes(this.$store.state.searhinput.toLowerCase()) || product.Category.title.toLowerCase().includes(this.$store.state.searhinput.toLowerCase())
        );
      } else {
        if (this.filtersCategory == "Todos") return this.$store.state.products;
        return this.$store.state.products.filter(
          (product) => product.Category.title === this.filtersCategory
        );
      }

    },
    filteredData() {
      // if(this.isFIlter == false) {
      //   return this.products.slice(0, this.currentPage * this.maxPerPage);
      // }
      return this.products.filter((data) => {
        const opts = this.selectedTab.options.map((opt) => opt.category);
        return opts.includes(data.category);
      });
    },
  },
};

</script>

<style lang="css" scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.author-link {
  z-index: 2;
  position: relative;
}

.slider-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: transparent;
}

.noresults img {
  width: 25%;
}

.imgpills {
  width: 20px;
  height: 20px;
}


.slider-button img {
  width: 60px;
  /* ajusta según tu preferencia */
  height: 60px;
  /* ajusta según tu preferencia */
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 44;
  /* puedes ajustar a tus necesidades */
  height: 44px;
  /* puedes ajustar a tus necesidades */
  margin-top: -22px;
  /* mitad de la altura para centrarlo verticalmente */
  background-size: 44 44px;
  /* ajustar según tus necesidades */
  z-index: 10;
  /* para asegurar que los botones estén por encima del slider */
  cursor: pointer;
}

.swiper-button-prev {
  left: 0;
  /* coloca el botón a la izquierda */
}

.swiper-container {
  border-bottom: 2px #000000 solid;
}

.swiper-button-next {
  right: 0;
  /* coloca el botón a la derecha */
}





.swiper-slide {
  display: flex;
  justify-content: center;
  /* Centrar horizontalmente */
  align-items: center;
  /* Centrar verticalmente */
  height: 100%;
  padding: 0px;
  /* Esto puede ser necesario si no tienes un alto definido para tus slides */
}

.slider-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centrar horizontalmente el contenido del botón */
  font-size: large;
  font-weight: 600;
  color: black;
}
</style>
