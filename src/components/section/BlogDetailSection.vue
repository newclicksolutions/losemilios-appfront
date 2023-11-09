<template>
    <div class="single-entry mb-5 mb-lg-0">
        <div class="gap-2x"></div>
        <div class="card card-creator-s1 mb-4">
            <div class="cardflex mb-4">
                <div class="tittleleft">
                    <h6 class="card-s1-title">Direcion de entrega</h6>
                </div>
                <div class="tittlerigth"><span>Cambiar</span></div>
            </div>

            <div class="card-body d-flex align-items-center">

                <div class="flex-grow-1">
                    <h6 class="card-s1-title">{{ JSON.parse(SectionData.userdata[0].shipping_address)[0].value }}</h6>
                    <p class="card-s1-text">
                        Instrucciones de entrega (opcional)
                    </p>
                    <input width="100%" type="area" placeholder="Detalles adicionales..."
                        aria-label="Detalles adicionales..." class="btn-dtInlm" value="">

                </div>
            </div>
        </div>

        <div class="card card-creator-s1 mb-4">
            <div class="cardflex mb-4">
                <div class="tittleleft">
                    <h6 class="card-s1-title">Productos</h6>
                </div>
                <div class="tittlerigth"><span @click="toggleAccordion" class="enRnoF">{{ storedCart.length }} Productos<svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#6A696E"
                                d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z">
                            </path>
                        </svg></span></div>
            </div>
            <transition name="slide-fade">
                <div class="acordeon-card" v-if="isAccordionOpen">
                    <div class="card-body d-flex align-items-center" v-for="list in storedCart" :key="list.id">
                        <div class="avatar avatar-1 flex-shrink-0">
                            <img :src="list.imgLg" alt="avatar" />
                        </div>
                        <div class="flex-grow-1">
                            <p class="card-s1-text" style="float: left: ;">
                                ({{ list.cant }})
                            </p>
                            <h4 class="card-s1-title">  {{ list.title }}</h4>
                            <h6 class="card-s1-title"> {{ $formatoMoneda(list.total * list.cant)}}</h6>
                            <p v-if="list.cartadditions.length" class="card-s1-text">
                                <span v-for="listadd in list.cartadditions" :key="listadd">
                                    {{ listadd.title }} - </span>


                            </p>

                        </div>
                    </div>
                </div>
            </transition>
            <div class="cardflexfooter mb-4">
                <div class="tittleleft">
                    <span>Entrega estimada:</span>
                </div>
                <div class="tittlerigth">
                    <h6 class="card-s1-title">47 - 62 min</h6>
                </div>
            </div>

        </div>

        <div class="card card-creator-s1 mb-4">
            <div class="cardflex mb-4">
                <div class="tittleleft">
                    <h6 class="card-s1-title">Método de pago</h6>
                </div>
                <div class="tittlerigth"><span></span></div>
            </div>

            <div class="card-body d-flex align-items-center">

                <div class="flex-grow-1">
                    <div class="d-flex mb-4">
                <div class="tittleleft">
                    <span>Métodos disponibles:</span>
                    
                </div>
                <div class="tittlerigth">
        <div class="form-check check-order mb-2">
            <label class="form-check-label form-check-label-s1" for="paymentEfectivo"> Efectivo</label>
            <input class="form-check-input check-all-input" 
                   type="checkbox" 
                   id="paymentEfectivo" 
                   v-model="selectedPaymentMethod" 
                   value="efectivo">
        </div>
        <div class="form-check check-order mb-2">
            <label class="form-check-label form-check-label-s1" for="paymentDatafono"> Datafono</label>
            <input class="form-check-input check-all-input" 
                   type="checkbox" 
                   id="paymentDatafono" 
                   v-model="selectedPaymentMethod" 
                   value="datafono">
        </div>
    </div>
            </div>
                </div>
            </div>
            <div class="card-body d-flex align-items-center">

<div class="flex-grow-1">
    <div class="d-flex mb-4">
<div class="tittleleft">
    <span>Agregar método de pago:</span>
    
</div>
<div class="tittlerigth">
    <a href="#" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addNewCardModal"> Agregar targeta de credito </a>
                                  
         <!-- Modal -->
         <div class="modal fade" id="addNewCardModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Agregar targeta de credito</h4>
                                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                            <em class="ni ni-cross"></em>
                                        </button>
                                    </div><!-- end modal-header -->
                                    <div class="modal-body">
                                        <div class="credit-card-form mb-4">
                                            <h5 class="mb-3">Credit Card Info</h5>
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Credit card number">
                                            <div class="row g-3">
                                                <div class="col-lg-8">
                                                    <input type="text" class="form-control form-control-s1" placeholder="Exp. Date">
                                                </div><!-- end col -->
                                                <div class="col-lg-4">
                                                    <input type="text" class="form-control form-control-s1" placeholder="CVC">
                                                </div><!-- end col -->
                                            </div><!-- end row -->
                                        </div><!-- end credit-card-form -->
                                        <div class="billing-form-wrap">
                                            <h5 class="mb-3">Billing Info</h5>
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 1">
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 2">
                                            <div class="row g-3">
                                                <div class="col-lg-6">
                                                    <input type="text" class="form-control form-control-s1" placeholder="City">
                                                </div><!-- end col -->
                                                <div class="col-lg-6">
                                                    <input type="text" class="form-control form-control-s1" placeholder="State">
                                                </div><!-- end col -->
                                            </div><!-- end row -->
                                            <input type="text" class="form-control form-control-s1 my-3" placeholder="Zip code">
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Country">
                                            <button class="btn btn-primary w-100" type="button">Save Card</button>
                                        </div><!-- end billing-form-wrap -->
                                    </div><!-- end modal-body -->
                                </div><!-- end modal-content -->
                            </div><!-- end modal-dialog -->
                        </div><!-- end modal-->
</div>
</div>
</div>
</div>
        </div>
        <!-- end gap -->

        <!-- end comment-wrapper -->
    </div>
    <!-- end single-entry -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
    name: "BlogDetailSection",
    data() {
        return {
            SectionData,
            isAccordionOpen: true,
            storedCart: [],
            selectedPaymentMethod: []
        };
    },
    mounted() {
        if (sessionStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(sessionStorage.getItem("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;
            } else {
                this.emptyCart = false;
            }
        }
    },
    methods: {
        toggleAccordion() {
            this.isAccordionOpen = !this.isAccordionOpen;
        }
    },
    watch: {
    selectedPaymentMethod(newVal) {
      if (newVal.length > 1) {
        this.selectedPaymentMethod.shift(); // Elimina el primer elemento si hay más de uno
      }
    }
  }
};
</script>
<style lang="css" scoped>

@media (max-width: 468px) {
    .card-creator-s1 .card-body {
    flex-direction: row;
    padding: 0px
}
.d-flex{
    flex-direction: column;
}
.flex-grow-1 {
    text-align: left;
    flex-grow: 1 !important;
    width: 100% !important;
}
}



.avatar-1 {
    width: 9.375rem;
    height: 8.375rem;
}
.cardflex {
    display: flex;
    /* Convertir el contenedor en un contenedor flex */
    justify-content: space-between;
    /* Espacio entre los elementos */
    align-items: center;
    border: 0;
    box-shadow: 0 1px 10px rgba(24, 24, 24, 0.07);
    border-radius: 0.375rem;
    transition: all 0.2s;
    padding: 20px 5px;
}

.cardflexfooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    padding: 0px 5px;
}

.enRnoF {
    cursor: pointer;
}

.tittleleft,
.tittlerigth {
    flex: 1;
    padding: 10px;

}

.btn-dtInlm {
    width: 100%;
    height: 50px;
    background-color: #8089961a;
    border: none;
    padding: 10px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: max-height 0.0s ease-in-out, opacity 0.0s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
}

.card-creator-s1 .card-body {
    border-bottom: 1px #f1f1f1 solid;
    padding: 15px;
}

.tittlerigth {
    text-align: right;
}
.check-order{
    padding: 10px;
    border: 1px #c7c7c7 solid;
    border-radius: 8px;
}
.check-order em{
    font-size: 30px;
}
.form-check .form-check-input {
    float: left;
    margin-left: 0px;
}





</style>
