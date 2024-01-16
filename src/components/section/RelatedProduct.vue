<template>
<section class="related-product-section section-space-b">
    <div class="container">
        <!-- section heading -->
        <SectionHeading :text="Populares"></SectionHeading>
        <!-- product -->
        <swiper 
            :modules="modules"
            :slides-per-view="4"
            :breakpoints="{
              0: {
                  slidesPerView: 1
              },
              767: {
                  slidesPerView: 2
              },
              992: {
                  slidesPerView: 3
              },
              1200: {
                  slidesPerView: 4
              }
            }"
            :pagination="{ clickable: true }">
            <swiper-slide v-for="product in productosAleatorios" :key="product.product_id">
                <div class="card card-full">
                    <div to="product.path" class="card-image">
                        <img :src="$store.state.configvar[0]?.apiurl +product.img"  class="card-img-top" alt="art image">
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title text-truncate mb-0">{{ product.title  }}</h5>
                        <div class="card-author mb-1 d-flex align-products-center">   
                        </div><!-- end card-author -->
                        <div class="custom-tooltip-wrap">
                      <p class="product-detail-text mb-4">{{ product.content }}</p>
                    </div>
                        <div class="card-price-wrap d-flex align-products-center justify-content-between mb-3">
                          <div class="me-2">
                              
                              <span class="card-price-number">{{ $formatoMoneda(product.price) }}</span>
                          </div>
                          
                        </div><!-- end card-price-wrap -->
                       <router-link to="product.path" class="btn btn-sm btn-primary">Lo quiero</router-link>
                    </div><!-- end card-body -->
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
                </div><!-- end card -->
            </swiper-slide>
        </swiper>
    </div><!-- .container -->
</section><!-- end related-product-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'RelatedProduct',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SectionData,
      Populares:"Mas vendidos"
    }
  },
  setup() {
    return{
       modules: [Pagination]
    }
  },
  mounted() {
    if (this.$store.state.products.length == 0) {
      this.$store.dispatch('fetchData');
      this.$store.dispatch('fetchOptions');
    }
  },
  computed: {
    productosAleatorios() {
      // Crea una copia del arreglo original y mézclala
      return this.shuffleArray([...this.$store.state.products]);
    }
  },
  methods: {
    shuffleArray(array) {
      // Algoritmo de Fisher-Yates para mezclar el arreglo
      let currentIndex = array.length, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    }
  }
}
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
</style>