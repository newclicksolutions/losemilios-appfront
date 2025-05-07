<template>
    <div class="single-entry mb-5 mb-lg-0">
        <div class="gap-2x"></div>
        <div class="card card-creator-s1 mb-1">
            <div class="cardflex mb-1">
                <div class="tittleleft">
                    <h6 class="card-s1-title">Dirección de entrega</h6>
                </div>
                <div v-if="UserData.length" class="tittlerigth"><a href="#" class="" data-bs-toggle="modal"
                        data-bs-target="#addNewadressModal">
                        Cambiar</a></div>
            </div>
            <div class="card-body d-flex align-items-center">

                <div class="flex-grow-1">
                    <div class="" v-if="emptyUser">
                        <a href="#" class="btn btn-primary mt-4" data-bs-toggle="modal"
                            data-bs-target="#addNewadressModal">
                            Agregar dirección de entrga</a>
                    </div>
                    <h6 v-if="UserData.length" class="card-s1-title">{{ UserData[0].nombre }}</h6>
                    <h6 v-if="UserData.length" class="card-s1-title">
                        <em class="ni ni-map-pin-fill"></em>
                        {{ UserData[0].direccion }} ( {{ UserData[0].neighborhood }})
                    </h6>

                </div>
            </div>

            <div class="modal fade" id="addNewadressModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Agregar Dirección de entrega</h4>
                            <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <form ref="agragardireccionform" @submit.prevent="agragardireccion">

                                <div class="credit-card-form mb-1">
                                    <div class="form-floating mb-1">
                                        <input type="text" class="form-control" v-model="nombre" id="Nombre"
                                            placeholder="Nombre" required>
                                        <label for="Nombre">Nombre</label>
                                    </div>
                                    <div class="form-floating mb-1">
                                        <input v-model="telefono" type="text" class="form-control mb-3"
                                            placeholder="Telefono" required>
                                        <label for="Telefono">Teléfono</label>
                                    </div>
                                    <div class="form-floating mb-1">
                                        <input v-model="email" type="email" class="form-control mb-3"
                                            placeholder="email" required>
                                        <label for="email">Correo</label>
                                    </div>
                                    <div class="form-floating mb-1">
                                        <select class="form-select" v-model="barrio" id="barrio" required>
                                            <option value="" disabled>Selecciona un barrio</option>
                                            <option v-for="b in JSON.parse(configvar[0].neighborhood_list)" :key="b"
                                                :value="b">{{ b }}</option>
                                        </select>
                                        <label for="barrio">Barrio</label>
                                    </div>
                                    <div class="form-floating mb-1">
                                        <input type="text" class="form-control" v-model="direccion" id="direccion"
                                            placeholder="Direccion de entrega" required>
                                        <label for="direccion">Escribe la direccion de entrega</label>
                                    </div>
                                </div><!-- end credit-card-form -->
                                <button class="btn btn-primary w-100" type="submit">{{ UserData.length ? "Cambiar" :
                                    "Agregar" }}</button>
                            </form>
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->
        </div>
    </div>
    <div class="card card-creator-s1 mb-1">
        <div class="cardflex mb-1">
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
                        <p class="card-s1-text" style="float: left">
                            ({{ list.cant }})
                        </p>
                        <h4 class="card-s1-title"> {{ list.title }}</h4>
                        <h6 class="card-s1-title"> {{ $formatoMoneda(list.total * list.cant) }}</h6>
                        <p v-if="list.cartopcionesSeleccionadas.length" class="card-s3-text">
                            <label for=""><b>Opciones</b> </label><br>
                            <span v-for="listopt in list.cartopcionesSeleccionadas" :key="listopt">
                                {{ listopt.nombre }}<br> </span>
                        </p>
                        <p v-if="list.cartadditions.length" class="card-s1-text">
                            <label for=""><b>Adiciones</b> </label><br>
                            <span v-for="listadd in list.cartadditions" :key="listadd">
                                {{ listadd.title }} <br></span>
                        </p>
                    </div>
                </div>
            </div>
        </transition>
        <div class="cardflexfooter mb-1">
            <div class="tittleleft">
                <span>Entrega estimada:</span>
            </div>
            <div class="tittlerigth">
                <h6 class="card-s1-title">47 - 62 min</h6>
            </div>
        </div>
    </div>
    <div class="card card-creator-s1 mb-1">
        <div class="cardflex mb-1">
            <div class="tittleleft">
                <h6 class="card-s1-title">Método de pago</h6>
            </div>
            <div class="tittlerigth"><span></span></div>
        </div>
        <div class="card-body d-flex align-items-center">
            <div class="flex-grow-1">
                <div class="d-flex mb-1">
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
                            <label class="form-check-label form-check-label-s1" for="paymentCredito">
                                Transferencia</label>
                            <input class="form-check-input check-all-input" type="checkbox" id="paymentCredito"
                                v-model="selectedPaymentMethod" value="2">
                        </div>
                        <div v-if="configvar[0].payu_enabled == 1" class="form-check check-order mb-2">
                            <label class="form-check-label form-check-label-s1" for="paymentCredito">
                                PayU</label>
                            <input class="form-check-input check-all-input" type="checkbox" id="paymentCredito"
                                v-model="selectedPaymentMethod" value="3">
                        </div>
                    </div>
                </div>
                <img :src="Transferencia" alt="" width="350" class="rounded-3 pt-5" />
                <img v-if="configvar[0].payu_enabled == 1" :src="PAYU" alt="" width="350" class="rounded-3 pt-5" />
            </div>
        </div>
    </div>

    <div class="card card-creator-s1 mb-1" v-if="UserData.length">
        <div class="cardflex mb-1">
            <div class="tittleleft">
                <h6 class="card-s1-title">Observaciones </h6>
            </div>
            <div class="tittlerigth"><span></span></div>
        </div>
        <div class="card-body d-flex align-items-center">
            <div class="flex-grow-1">
                <div class="d-flex mb-1">
                    <textarea  rows="10" cols="100" v-model="adicionalinst" @change="addobservation" width="100%"
                        type="area" placeholder="Escribe aquí detalles adicionales del pedido" aria-label="Escribe aquí detalles adicionales del pedido"
                        class="btn-dtInlm"></textarea>
                </div>
            </div>
        </div>
    </div>





    <Notification ref="notification" />
</template>
<script>

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
            isAccordionOpen: false,
            isAccordionOpenpropina: true,
            storedCart: [],
            selectedPaymentMethod: [],
            propinaprice: 0,
            UserData: [],
            creditcart: [],
            barrio: '',
            barriosMedellin: [
                'Belén', 'Laureles', 'El Poblado', 'Robledo', 'Manrique',
                'Aranjuez', 'Buenos Aires', 'San Javier', 'Castilla',
                'Doce de Octubre', 'Villa Hermosa', 'Popular', 'Guayabal',
                'La América', 'Santa Cruz'
            ],
            showModal: false,
            buttons: [1000, 2000, 3000, " Otro"],
            activeButton: null,
            tipvalue: 0,
            PAYU: require('@/images/thumb/PAYU.png'),
            Transferencia: require('@/images/thumb/CV3CPTJFK5ENNCQCDXZESDJAEA.png'),
        };
    },
    mounted() {
        if (localStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(this.$GetEncryptedData("shopingcart"));
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
                this.emptyUser = false
                this.email = this.UserData[0]?.email
                this.direccion = this.UserData[0]?.direccion
                this.nombre = this.UserData[0]?.nombre
                this.telefono = this.UserData[0]?.telefono
                this.adicionalinst = this.UserData[0]?.adicionalinst
                this.selectedPaymentMethod = this.UserData[0]?.PaymentMethod
                this.barrio = this.UserData[0]?.neighborhood
            }
        }
    },
    methods: {
        addobservation() {
            this.UserData[0].adicionalinst = this.adicionalinst
            localStorage.setItem("UserData", JSON.stringify(this.UserData));
        },
        toggleAccordion() {
            this.isAccordionOpen = !this.isAccordionOpen;
        },
        removeModalBackdrop() {
            const modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
            if (modalBackdrop && modalBackdrop.parentNode) {
                modalBackdrop.parentNode.removeChild(modalBackdrop);
            }
        },
        /*         async agragardireccion() {
            const registroPayload = {
                direccion: this.direccion,
                apellido: "",
                password: "CV33?(^@#$3$?%#4#$JAE??*",
                fullName: this.nombre,
                emailAddress: this.email,
                tel: this.telefono,
                user_type_id: 2,
                user_registered: new Date().toISOString(),
                adicionalinst: this.adicionalinst,
                PaymentMethod: this.selectedPaymentMethod,
                cartinfo: this.creditcart,
                tip: this.tipvalue,
                shipping_neighborhood: this.barrio
            };
        
            const result = await this.$store.dispatch('registarusuario', registroPayload);
        
            let userId = null;
        
            if (result.success) {
                const emailvalido = await this.$store.dispatch('validateEmail', { emailAddress: this.email });
                userId = emailvalido?.data?.[0]?.user_id;
            } else if (result.error) {
                userId = result?.data?.[0]?.user_id;
            }
        
            if (userId) {
                const userdata = {
                    direccion: this.direccion,
                    nombre: this.nombre,
                    email: this.email,
                    telefono: this.telefono,
                    adicionalinst: this.adicionalinst,
                    PaymentMethod: this.selectedPaymentMethod,
                    cartinfo: this.creditcart,
                    tip: this.tipvalue,
                    neighborhood: this.barrio,
                    user_id: userId
                };
        
                localStorage.setItem("UserData", JSON.stringify(userdata));
                this.UserData = userdata;
                this.emptyUser = false;
                this.showModal = false;
                this.$router.go('/pedido');
            }
        } */

        async agragardireccion() {
            const userdatarister = [{
                direccion: this.direccion,
                apellido: "",
                password: "CV33?(^@#$3$?%#4#$JAE??*",
                fullName: this.nombre,
                emailAddress: this.email,
                tel: this.telefono,
                user_type_id: 2,
                user_registered: new Date().toISOString(),
                adicionalinst: this.adicionalinst,
                PaymentMethod: this.selectedPaymentMethod,
                cartinfo: this.creditcart,
                tip: this.tipvalue,
                shipping_neighborhood: this.barrio
            }]
            const result = await this.$store.dispatch('registarusuario', userdatarister[0])
            if (result.error) {
                const userdata = [{
                    direccion: this.direccion,
                    nombre: this.nombre,
                    email: this.email,
                    telefono: this.telefono,
                    adicionalinst: this.adicionalinst,
                    PaymentMethod: this.selectedPaymentMethod,
                    cartinfo: this.creditcart,
                    tip: this.tipvalue,
                    neighborhood: this.barrio,
                    user_id: result.data[0].user_id
                }]
                const parsed = JSON.stringify(userdata);
                localStorage.setItem("UserData", parsed);
                this.UserData = JSON.parse(localStorage.getItem("UserData"));
                this.emptyUser = false
                this.showModal = false;
                this.$router.go('/pedido')
            }
            if (result.success) {

                const emailvalido = await this.$store.dispatch('validateEmail', { emailAddress: this.email })
                const userdata = [{
                    direccion: this.direccion,
                    nombre: this.nombre,
                    email: this.email,
                    telefono: this.telefono,
                    adicionalinst: this.adicionalinst,
                    PaymentMethod: this.selectedPaymentMethod,
                    cartinfo: this.creditcart,
                    tip: this.tipvalue,
                    neighborhood: this.barrio,
                    user_id: emailvalido.data[0].user_id
                }]
                const parsed = JSON.stringify(userdata);
                localStorage.setItem("UserData", parsed);
                this.UserData = JSON.parse(localStorage.getItem("UserData"));
                this.emptyUser = false
                this.showModal = false;
                this.$router.go('/pedido')
            }

        },
    },
    computed: {
        configvar() {
            return JSON.parse(this.$GetEncryptedData("configvar"));
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

.tittleleft,
.tittlerigth {
    flex: 1;
    padding: 10px;

}

.btn-dtInlm {
    width: 100%;
    height: 80px;
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
.card-creator-s1{
    padding: 5px 5px;
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
