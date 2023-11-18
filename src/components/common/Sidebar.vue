<template>
    <div class="sidebar row">
        <div class="col-lg-12 sidebar-widget">

            <div class="gap-2x"></div>
            <div class="card card-creator-s1 mb-4">
                <div class="cardflex mb-4">
                    <div class="tittleleft">
                        <h6 class="card-s1-title">Resumen</h6>
                    </div>
                    <div class="tittlerigth"><span></span></div>
                </div>

                <div class="card-body d-flex align-items-center">

                    <div class="flex-row-1 flex-grow-sidebar">
                        <ul class="total-bid-list mb-4">
                            <li>
                                <span>Costo de productos</span>
                                <p>{{ $formatoMoneda(totalSum) }}</p>
                            </li>
                            <li>
                                <span>Costo de envío</span>
                                <p> {{ $formatoMoneda(5300) }}</p>
                            </li>
                            <li>
                                <span>Propina del Repartidor</span>
                                <p> {{ $formatoMoneda(1000) }}</p>
                            </li>
                            <li>
                                <h4>Total</h4>
                                <h4>{{ $formatoMoneda(totalSum + (5300 + 1000)) }}</h4>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <button @click="irapagar" class="btn btn-primary d-block">Hacer pedido</button>
            <Notification ref="notification" />
        </div><!-- end sidebar-widget -->

    </div><!-- end sidebar -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Notification from './Notification.vue'

export default {
    components: {
        Notification
    },
    name: 'Sidebar',
    data() {
        return {
            SectionData,
            storedCart: [],
            userdata: [],
        }
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
        irapagar() {
            if (this.validarCampos()) {
                //sessionStorage.removeItem("shopingcart")
                //this.$store.dispatch('setcartcount', 0);
               // this.$store.dispatch('updatecart', []);
                this.$router.push('/ordencompleta')
            } else {
                this.$refs.notification.showNotification('Debes seleccionar un metodo de pago', '#D11D23')
            }
        },

        validarCampos() {
            this.userdata = JSON.parse(sessionStorage.getItem("UserData"));
            if (this.userdata) {
                for (const key in this.userdata) {
                    console.log(this.userdata[key].PaymentMethod.length);
                    if (this.userdata[key].PaymentMethod.length === 0) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
    },
    computed: {
        totalSum() {
            return this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0);
        },

    }
}
</script>
<style>
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
</style>
