<template>
    <transition name="sidebar-cart">
        <div class="sidebar sidebar-cart  row" v-if="stateshowcart">
            <div class="col-lg-12 sidebar-widget sidebar-widget-cart">
                <div class="card card-creator-s1">
                    <div class="modal-header">
                        <h4 class="modal-title">Tu Carrito</h4><button @click="toggleCart" type="button"
                            class="btn-close"><em class="ni ni-cross"></em></button>
                    </div>
                    <div class="cardflex mb-2">

                        <div class="tittleleft">
                            <h6 class="card-s1-title"></h6>
                        </div>
                        <div class="tittlerigth"><span @click="toggleAccordion" class="enRnoF">{{ cart.length }}
                                Productos<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path fill="#6A696E"
                                        d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div class="center mb-4" v-if="!cart.length"
                        style="text-align: center; display: flex; align-items: center; flex-direction: column;">
                        <p>Aun no tienes productos en tu carrito </p>
                        <a :disabled="isButtonDisabled" href="/" class="btn btn-primary d-block" style="width: 260px;">
                            Comenzar a comprar </a>
                    </div>
                    <transition name="slide-fade">
                        <div class="acordeon-card" v-if="isAccordionOpen">
                            <div class="card-body d-flex d-flex-tras align-items-center" v-for="list in cart"
                                :key="list.id">
                                <div class="avatar avatar-1 flex-shrink-0">
                                    <img :src="$store.state.configvar[0]?.apiurl + list.imgLg" alt="avatar" />
                                </div>
                                <div class="flex-grow-1">
                                    <div class="dv1">
                                        <p class="card-s5-title"> {{ list.title }}</p>
                                        <h6 class="card-s1-title"> {{ $formatoMoneda(list.total * list.cant) }}</h6>
                                        <p v-if="list.cartopcionesSeleccionadas.length" class="card-s3-text">
                                            <label for=""><b>Opciones</b> </label><br>
                                            <span v-for="listopt in list.cartopcionesSeleccionadas" :key="listopt">
                                                {{ listopt.nombre }}<br> </span>
                                        </p>
                                        <p v-if="list.cartadditions.length" class="card-s3-text">
                                            <label for=""><b>Adiciones</b></label><br>
                                            <span v-for="listadd in list.cartadditions" :key="listadd">
                                                {{ listadd.title }}<br> </span>
                                        </p>

                                    </div>
                                    <div class="dv3">
                                        <button @click="increment(list)">+</button>
                                        <input type="number" v-model="list.cant" />
                                        <button @click="decrement(list)">-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="bottom-gotopay">
                        <spam v-if="cart.length" class="sub-tlt">Subtotal: {{ $formatoMoneda(totalSum) }}</spam>
                        <div class="cardflexfooter mb-2" v-if="cart.length">
                            <div class="tittleleft">
                                <em @click="clearCart" class="ni ni-trash" data-v-4a61c780=""></em>
                            </div>
                            <div class="tittlerigth">
                                <a :disabled="isButtonDisabled" :href="SectionData.placeBidModal.btnLink"
                                    class="btn btn-primary d-block" style="width: 260px;">
                                    Ir a pagar </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- end sidebar-widget -->
        </div><!-- end sidebar -->
    </transition>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import CryptoJS from 'crypto-js';

export default {

    name: 'Sidebar',
    data() {
        return {
            isButtonDisabled: false,
            showcart: true,
            SectionData,
            isAccordionOpen: true,
            storedCart: [],
        }
    },
    mounted() {
        if (localStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(this.$GetEncryptedData("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;
            } else {
                this.emptyCart = false;
                this.$store.dispatch('setcartcount', this.storedCart.length);
                this.$store.dispatch('updatecart', this.storedCart);
            }
        }
    },
    methods: {
        setcart() {
            this.storedCart = JSON.parse(this.$GetEncryptedData("shopingcart"));
        },
        toggleAccordion() {
            this.isAccordionOpen = !this.isAccordionOpen;
        },
        toggleCart() {
            this.$store.dispatch('hidecart');
        },
        clearCart() {
            localStorage.removeItem("shopingcart")
            this.$store.dispatch('setcartcount', 0);
            this.$store.dispatch('updatecart', []);
        },
        increment(index) {
            this.setcart()
            this.storedCart.find(item => item.id === index.id).cant = (index.cant + 1)
            const parsed = JSON.stringify(this.storedCart);
            const encrypted = CryptoJS.AES.encrypt(JSON.stringify(parsed), 'Rt8wkjc##34laAD9?884**').toString();
            localStorage.setItem("shopingcart", encrypted);
            this.$store.dispatch('updatecart', this.storedCart);
        },
        decrement(index) {
            this.setcart()
            if (index.cant == 1) {
                const i = this.storedCart.findIndex(item => item.id === index.id);
                if (i !== -1) {
                    this.storedCart.splice(i, 1);
                    const parsed = JSON.stringify(this.storedCart);
                    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(parsed), 'Rt8wkjc##34laAD9?884**').toString();
                    localStorage.setItem("shopingcart", encrypted);
                    this.$store.dispatch('setcartcount', this.storedCart.length);
                    this.$store.dispatch('updatecart', this.storedCart);
                }
            } else {
                this.storedCart.find(item => item.id === index.id);
                this.storedCart.find(item => item.id === index.id).cant = (index.cant - 1)
                const parsed = JSON.stringify(this.storedCart);
                const encrypted = CryptoJS.AES.encrypt(JSON.stringify(parsed), 'Rt8wkjc##34laAD9?884**').toString();
                localStorage.setItem("shopingcart", encrypted);

                this.$store.dispatch('updatecart', this.storedCart);
            }
        },
    },
    computed: {
        stateshowcart() {
            return this.$store.state.cartview;
        },
        cart() {
            return this.$store.state.cart;
        },
        totalSum() {
            return this.$store.state.cart.reduce((acc, item) => acc + (item.total) * (item.cant), 0);
        },
    }
}
</script>
<style>
@media (max-height: 670px) {
    .acordeon-card {
        height: 48vh !important;
    }
}

@media (min-height: 671px) and (max-height: 779px) {
    .acordeon-card {
        height: 51vh !important;
    }
}

@media (min-height: 780px) and (max-height: 939px) {
    .acordeon-card {
        height: 58vh !important;
    }
}

@media (min-height: 940px) {
    .acordeon-card {
        height: 60vh !important;
    }
}

@media (max-width: 968px) {
    .bottom-gotopay {
        position: fixed;
        bottom: 50px;
        background: white;
        width: 100%;
        left: 0px;
        padding: 3px 4px 10px 4px;
        border-top: 1px #dbdbdb solid;
    }

    .card-creator-s1 .card-body {
        flex-direction: row;
        padding: 0px
    }

    .sidebar-widget-cart {
        width: 100% !important
    }

    .d-flex-tras {
        flex-direction: column;
    }

    .flex-grow-1 {
        text-align: left;
        flex-grow: 1 !important;
        width: 100% !important;
    }
}

.acordeon-card {
    overflow: auto;
    min-height: 200px;
    height: 64vh;
}

.sidebar-cart-enter-active,
.sidebar-cart-leave-active {
    transition: opacity 0.5s;
}

.sidebar-cart-enter,
.sidebar-cart-leave-to

/* .sidebar-cart-leave-active a partir de Vue 2.1.8 */
    {
    opacity: 0;
}

.sidebar-cart-enter-active,
.sidebar-cart-leave-active {
    transition: opacity 0.5s;
}

.sidebar-cart-enter,
.sidebar-cart-leave-to,
.sidebar-cart-leave-active {
    opacity: 0;
}

.flex-grow-sidebar {
    width: 100%;
}

.cardflex {
    display: flex;
    /* Convertir el contenedor en un contenedor flex */
    justify-content: space-between;
    /* Espacio entre los elementos */
    align-items: center;
    border: 0;
    border-radius: 0.375rem;
    transition: all 0.2s;
    padding: 5px 5px;
}

.card-creator-s1 .card-body {
    padding: 4px;
    border-bottom: 1px #efefef solid;
}

.card-creator-s1 {
    padding: 20px 5px;
}

.card-creator-s1 .modal-title {
    font-size: 14px;
}

.card-creator-s1 .modal-header {
    padding: 10px 10px;
}


.card-s1-text {
    font-size: 13px;
}

.card-s5-title {
    font-size: 15px;
    font-weight: 800;
    color: black;
}

.card-s3-text {
    line-height: 15px;
    font-size: 13px;
    color: black !;
}

.cardflexfooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    padding: 0px 5px;
}

.acordeon-card {
    overflow: auto;
    min-height: 100%;

}


.enRnoF {
    cursor: pointer;
    font-size: 13px;
}

.tittleleft em {
    cursor: pointer;
    font-size: 37px;
}

.tittleleft em:hover {
    cursor: pointer;
    font-size: 40px;
}

.tittleleft {
    text-align: left;
}

.tittlerigth {
    flex: 1;
    padding: 5px;
    text-align: end;

}

.sidebar-widget-cart {
    height: 100vh;
    padding: 5px;
    width: 420px;
    position: absolute;
    right: -16px;
    background: white;
}

.sidebar-cart {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: #b6b6b6a8;
}

.dv1 {
    align-items: flex-start;
}

.dv3 {
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
}

.dv3 button {
    width: 25px;
    height: 25px;
    border-radius: 50px;
    color: white;
    background: black;
    font-size: 18px;
    border: none;
    margin: 8px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

input {
    width: 9px;
    height: 40px;
    border: transparent;
}

.addprice {
    font-size: 12px;
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
</style>
