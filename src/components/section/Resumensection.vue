<template>
    <div class="single-entry mb-5 mb-lg-0">
        <div class="gap-2x"></div>
        <div class="card card-creator-s1 mb-4">
            <div class="tittleleft" style="padding: 48px 16px;">
                <h6 class="card-s1-title">Recibimos tu pedido</h6>
                <p>Creado: {{ $getFormattedTime() }}</p>
            </div>
        </div>
    </div>

    <div class="card card-creator-s1 mb-4">
        <div class="cardflex mb-4">
            <div class="tittleleft">
                <h6 class="card-s1-title">Resumen</h6>
            </div>
            <div class="tittlerigth"><span @click="toggleAccordion(1)" class="enRnoF">Ver detalles<svg
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
                        <h4 class="card-s1-title"> {{ list.title }}</h4>
                        <h6 class="card-s1-title"> {{ $formatoMoneda(list.total * list.cant) }}</h6>
                        <p v-if="list.cartadditions.length" class="card-s1-text">
                            <span v-for="listadd in list.cartadditions" :key="listadd">
                                {{ listadd.title }} - </span>


                        </p>

                    </div>
                </div>
            </div>
        </transition>
    </div>
    <div class="card card-creator-s1 mb-4">
        <div class="cardflex mb-4">
            <div class="tittleleft">
                <h6 class="card-s1-title">Detalles de envio</h6>
            </div>
            <div class="tittlerigth"><span @click="toggleAccordion(2)" class="enRnoF">Ver detalles<svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#6A696E"
                            d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z">
                        </path>
                    </svg></span></div>
        </div>
        <transition name="slide-fade">
            <div class="acordeon-card" v-if="isAccordionOpen1">
                <div class="card-body d-flex align-items-center">
                    <div v-if="UserData.length" class="flex-grow-1">
                        <h6 class="card-s1-title">{{ UserData[0].nombre }}</h6>
                        <p class="card-s1-text">
                            <span>
                                {{ UserData[0].direccion }}
                            </span>
                        </p>
                        <p class="card-s1-text">
                            <span>
                                {{ UserData[0].telefono }}
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </transition>
    </div>
    <div class="card card-creator-s1 mb-4">
        <div class="cardflex mb-4">
            <div class="tittleleft">
                <h6 class="card-s1-title">Tu cobro : {{ $formatoMoneda(totalSum + (5300 + 1000)) }}</h6>
            </div>
            <div class="tittlerigth"><span @click="toggleAccordion(3)" class="enRnoF">Ver detalles<svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#6A696E"
                            d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z">
                        </path>
                    </svg></span></div>
        </div>
        <transition name="slide-fade">
            <div class="acordeon-card" v-if="isAccordionOpen2">
                <div class="card-body d-flex align-items-center">
                    <ul class="total-bid-list mb-4">
                        <li>
                            <span>Costo de productos: </span>
                            <p>{{ $formatoMoneda(totalSum) }}</p>
                        </li>
                        <li>
                            <span>Costo de envío: </span>
                            <p> {{ $formatoMoneda(5300) }}</p>
                        </li>
                        <li>
                            <span>Propina del Repartidor: </span>
                            <p> {{ $formatoMoneda(1000) }}</p>
                        </li>
                        <li>
                            <h4>Total </h4>
                            <h4>{{ $formatoMoneda(totalSum + (5300 + 1000)) }}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
    <!-- end gap -->

    <!-- end comment-wrapper -->
<div class="mx-auto text-center "> 
    <a href="/">Volver al inicio</a>
</div>
    <!-- end single-entry -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
    name: "Resumensection",
    data() {
        return {
            emptyUser: true,
            SectionData,
            isAccordionOpen: false,
            isAccordionOpen1: false,
            isAccordionOpen2: false,
            storedCart: [],
            selectedPaymentMethod: [],
            UserData: [],
            showModal: false
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
        if (sessionStorage.getItem("UserData")) {
            this.UserData = JSON.parse(sessionStorage.getItem("UserData"));
            if (this.UserData.length === 0) {
                this.emptyUser = true;
            } else {
                this.emptyUser = false;
            }
            console.log(this.UserData.length)
        }
    },
    methods: {
        toggleAccordion(key) {
            switch (key) {
                case 1:
                    this.isAccordionOpen = !this.isAccordionOpen;
                    break;
                case 2:
                    this.isAccordionOpen1 = !this.isAccordionOpen1;
                    break;
                case 3:
                    this.isAccordionOpen2 = !this.isAccordionOpen2;
                    break;

                default:
                    break;
            }

        }
    },
    computed: {
        totalSum() {
            return this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0);
        },

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

    .d-flex {
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

.check-order {
    padding: 10px;
    border: 1px #c7c7c7 solid;
    border-radius: 8px;
}

.check-order em {
    font-size: 30px;
}

.form-check .form-check-input {
    float: left;
    margin-left: 0px;
}
</style>
