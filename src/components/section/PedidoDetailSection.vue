<template>
    <div class="single-entry mb-5 mb-lg-0">
        <div class="gap-2x"></div>
        <div class="card card-creator-s1 mb-4">
            <div class="cardflex mb-4">
                <div class="tittleleft">
                    <h6 class="card-s1-title">Direcion de entrega</h6>
                </div>
                <div v-if="UserData.length" class="tittlerigth"><a href="#" class="" data-bs-toggle="modal"
                        data-bs-target="#addNewadressModal">
                        Cambiar</a></div>
            </div>

            <div class="card-body d-flex align-items-center">

                <div class="flex-grow-1">
                    <div class="" v-if="emptyUser">
                        <a href="#" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addNewadressModal">
                            Agregar direccion de entrga</a>

                    </div>
                    <h6 v-if="UserData.length" class="card-s1-title">{{ UserData[0].nombre }}</h6>
                    <h6 v-if="UserData.length" class="card-s1-title">
                        <em class="ni ni-map-pin-fill"></em>
                        {{ UserData[0].direccion }}
                    </h6>
                    <p v-if="UserData.length" class="card-s1-text">
                        Instrucciones de entrega (opcional)
                    </p>
                    <input v-if="UserData.length" v-model="adicionalinst" width="100%" type="area"
                        placeholder="Detalles adicionales..." aria-label="Detalles adicionales..." class="btn-dtInlm">

                </div>


            </div>
            <!-- Modal -->
            <div class="modal fade" id="addNewadressModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Agregar Direccion de entrega</h4>
                            <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <form @submit.prevent="agragardireccion">
                                <div class="credit-card-form mb-4">
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="nombre" id="Nombre"
                                            placeholder="Nombre" required>
                                        <label for="Nombre">Nombre</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input v-model="telefono" type="text" class="form-control mb-3"
                                            placeholder="Telefono" required>
                                        <label for="Telefono">Telefono</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input v-model="email" type="text" class="form-control mb-3" placeholder="Telefono"
                                            required>
                                        <label for="Telefono">Correo</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="direccion" id="direccion"
                                            placeholder="Direccion de entrega" required>
                                        <label for="direccion">Escribe la direccion de entrega</label>
                                    </div>
                                </div><!-- end credit-card-form -->
                                <button class="btn btn-primary w-100" type="submit">Agregar</button>
                            </form>
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->
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
                        <img :src="$store.state.configvar[0]?.apiurl + list.imgLg" alt="avatar" />
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
                            <input class="form-check-input check-all-input" type="checkbox" id="paymentEfectivo"
                                v-model="selectedPaymentMethod" value="1">
                        </div>
                        <div class="form-check check-order mb-2">
                            <label class="form-check-label form-check-label-s1" for="paymentCredito"> PayU</label>
                            <input class="form-check-input check-all-input" type="checkbox" id="paymentCredito"
                                v-model="selectedPaymentMethod" value="3">
                        </div>
                    </div>
                </div>
                <img :src="PAYU" alt=""  width="150" class="rounded-3 pt-5" />
            </div>
        </div>
        <div class="card-body d-flex align-items-center">

            <div class="flex-grow-1" hidden>
                <div class="d-flex mb-4">
                    <div class="tittleleft">
                        <span>Agregar método de pago:</span>

                    </div>
                    <div class="tittlerigth">
                        <a href="#" @click="openAddNewCardModal" ref="addNewCardModal" class="btn btn-primary mt-4"
                            data-bs-toggle="modal" data-bs-target="#addNewCardModal">
                            Agregar targeta de credito </a>

                        <!-- Modal -->
                        <div :class="{ 'modal': true, 'fade': true, 'show': showModal }" id="addNewCardModal" tabindex="-1"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Agregar targeta de credito</h4>
                                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal"
                                            aria-label="Close">
                                            <em class="ni ni-cross"></em>
                                        </button>
                                    </div><!-- end modal-header -->
                                    <div class="modal-body">
                                        <form @submit.prevent="savecard">
                                            <div class="credit-card-form mb-4">


                                                <div class="mb-3">
                                                    <label for="crtname" class="form-label">Nombre en la Tarjeta de
                                                        Crédito</label>
                                                    <input v-model="crtname" type="text" class="form-control" id="crtname"
                                                        required>
                                                    <div v-if="!crtname" class="invalid-feedback">Este campo es obligatorio
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label for="crtnumber" class="form-label">Número de Tarjeta de
                                                        Crédito</label>
                                                    <input v-model="crtnumber" type="number" class="form-control"
                                                        id="crtnumber" required>
                                                </div>

                                                <div class="row g-3">
                                                    <div class="col-lg-8 mb-3">
                                                        <label for="crtdate" class="form-label">Exp. Fecha</label>
                                                        <input v-model="crtdate" type="date" class="form-control"
                                                            id="crtdate" required>
                                                    </div>
                                                    <div class="col-lg-4 mb-3">
                                                        <label for="crtcvc" class="form-label">CVC</label>
                                                        <input v-model="crtcvc" type="password" class="form-control"
                                                            id="crtcvc" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="billing-form-wrap">
                                                <button class="btn btn-primary w-100" type="submit">Guardar tarjeta</button>
                                            </div>
                                        </form>
                                    </div><!-- end modal-body -->
                                </div><!-- end modal-content -->
                            </div><!-- end modal-dialog -->
                        </div><!-- end modal-->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card card-creator-s1 mb-4" hidden>
        <div class="cardflex mb-4">
            <div class="tittleleft">
                <h6 class="card-s1-title">Añade una propina</h6>
            </div>
            <div class="tittlerigth"><span></span></div>
        </div>

        <div class="card-body d-flex align-items-center">

            <div class="flex-grow-1">
                <div class="d-flex mb-4 propina-btn">
                    <label class="form-check-label form-check-label-s1 check-order p-1 mx-2"
                        v-for="(button, index) in buttons" :key="index" @click="activateButton(index,button)"
                        :class="{ active: activeButton === index }">
                        <em v-if="button === 'Otro'" class='menu-on menu-icon ni ni-user'></em>
                        {{ button }}
                    </label>
                </div>
            </div>
        </div>
        <div class="card-body d-flex align-items-center">

            <transition name="slide-fade">
                <div class="acordeon-card" v-if="isAccordionOpenpropina">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Añade una propina</h4>
                            <button type="button" class="btn-close icon-btn" @click="isAccordionOpenpropina = false">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <form @submit.prevent="agragarpropina">
                                <div class="credit-card-form mb-4">
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="propinaprice" id="Nombre"
                                            placeholder="$0" required>
                                        <label for="Nombre">Ingresa el monto</label>
                                    </div>

                                </div><!-- end credit-card-form -->
                                <button class="btn btn-primary w-100" type="submit">Agregar</button>
                                <hr>
                                <button class="btn btn-primary w-100" type="submit">Sin propina</button>
                            </form>
                        </div><!-- end modal-body -->
                    </div>
                </div>
            </transition>
            <div class="modal fade" id="addpropinaModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div>
        </div>
    </div>
    <!-- end gap -->

    <!-- end comment-wrapper -->

    <!-- end single-entry -->
    <Notification ref="notification" />
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
    name: "PedidoDetailSection",
    data() {
        return {
            crtname: '',
            crtnumber: '',
            crtdate: '',
            crtcvc: '',
            email: null,
            direccion: null,
            nombre: null,
            telefono: null,
            emptyUser: true,
            adicionalinst: null,
            SectionData,
            isAccordionOpen: true,
            isAccordionOpenpropina: false,
            storedCart: [],
            selectedPaymentMethod: [],
            propinaprice:0,
            UserData: [],
            creditcart: [],
            showModal: false,
            buttons: [1000, 2000, 3000, " Otro"],
            activeButton: null,
            tipvalue:0,
            PAYU: require('@/images/thumb/PAYU.png'),
        };
    },
    mounted() {
        if (localStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(localStorage.getItem("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;
            } else {
                this.emptyCart = false;
            }
        }
        if (localStorage.getItem("UserData")) {
            this.UserData = JSON.parse(localStorage.getItem("UserData"));
            if (this.UserData.length === 0) {
                this.emptyUser = true;
            } else {
                this.emptyUser = false;
            }
            console.log(this.UserData.length)
        }
    },
    methods: {
        savecard() {
            if (this.UserData.length) {
                if (this.validateForm()) {
                    // Realiza la acción de guardar
                    this.creditcart = [{
                        crtname: this.crtname,
                        crtnumber: this.crtnumber,
                        crtdate: this.crtdate,
                        crtcvc: this.crtcvc,
                    }]
                    this.UserData[0].cartinfo = this.creditcart
                    this.UserData[0].PaymentMethod[0] = "3"
                    localStorage.setItem("UserData", JSON.stringify(this.UserData));
                } else {
                    this.selectedPaymentMethod = []
                    localStorage.setItem("UserData", JSON.stringify(this.UserData));
                    this.$refs.notification.showNotification('Debes ingresar una dirección de envío', '#D11D23')
                }
            }


        },
        activateButton(index,value) {
            this.activeButton = index;
            this.tipvalue = value
            this.agragardireccion()
        },
        agragarpropina() {

        },
        validateForm() {
            // Lógica de validación personalizada
            return this.crtname && this.crtnumber && this.crtdate && this.crtcvc;
        },
        toggleAccordion() {
            this.isAccordionOpen = !this.isAccordionOpen;
        },
        agragardireccion() {
            const userdata = [{
                direccion: this.direccion,
                nombre: this.nombre,
                email: this.email,
                telefono: this.telefono,
                adicionalinst: this.adicionalinst,
                PaymentMethod: this.selectedPaymentMethod,
                cartinfo: this.creditcart,
                tip: this.tipvalue
            }]
            const parsed = JSON.stringify(userdata);
            localStorage.setItem("UserData", parsed);
            this.UserData = JSON.parse(localStorage.getItem("UserData"));
            this.emptyUser = false
            this.showModal = false;
        },
        openAddNewCardModal() {
            this.showModal = !this.showModal;
        },

    },
    computed: {
        lastFourDigits() {
            const crtnumber = parseInt(this.UserData[0]?.cartinfo[0]?.crtnumber)
            console.log(crtnumber.toString())
            return crtnumber.toString().slice(-4);
        },
        cartinfo() {
            if (this.UserData.length) {
                return this.UserData[0].cartinfo.length
            }
            return 0
        }
    },
    watch: {
        selectedPaymentMethod(newVal) {
            if (newVal.length > 1) {
                this.selectedPaymentMethod.shift(); // Elimina el primer elemento si hay más de uno
            }
            if (this.UserData.length) {
                this.UserData[0].PaymentMethod = this.selectedPaymentMethod
                localStorage.setItem("UserData", JSON.stringify(this.UserData));
            } else {
                this.$refs.notification.showNotification('Debes ingresar una dirección de envío', '#D11D23')
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

.active {
    background-color: red;
    color: #fff;
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

.propina-btn button {}

;

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
