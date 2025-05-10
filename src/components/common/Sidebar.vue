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
                                <p> {{ $formatoMoneda(configvar[0].shipvalue) }}</p>
                            </li>
                            <li class="propina">
                                <span>Propina del Repartidor <a href="#" @click="toggleTip">Cambiar</a></span>
                                <p v-if="showTip"> {{ $formatoMoneda(Tip) }}</p>
                                <input v-else v-model="Tip" min=1 type="number" @change="toggleTip" required>
                            </li>
                            <li>
                                <h4>Total</h4>
                                <h4 v-if="Tip">{{ $formatoMoneda(totalSum + (configvar[0].shipvalue + Tip)) }}</h4>
                                <h4 v-else>{{ $formatoMoneda(totalSum + (configvar[0].shipvalue)) }}</h4>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <button v-if="isWithinTimeRange()" @click="irapagar" class="btn btn-primary d-block">Hacer pedido</button>
            <p v-if="!isWithinTimeRange()">Tienda cerrada</p>
            <form ref="payuForm" method="post" :action="payuActionUrl">
                <input name="merchantId" type="hidden" v-model="merchantId">
                <input name="accountId" type="hidden" v-model="accountId">
                <input name="description" type="hidden" v-model="description">
                <input name="referenceCode" type="hidden" v-model="referenceCode">
                <input name="amount" type="hidden" v-model="amount">
                <input name="tax" type="hidden" v-model="tax">
                <input name="taxReturnBase" type="hidden" v-model="taxReturnBase">
                <input name="currency" type="hidden" v-model="currency">
                <input name="signature" type="hidden" v-model="signature">
                <input name="test" type="hidden" v-model="test">
                <input name="buyerEmail" type="hidden" v-model="buyerEmail">
                <input name="responseUrl" type="hidden" v-model="responseUrl">
                <input name="confirmationUrl" type="hidden" v-model="confirmationUrl">
            </form>

            <Notification ref="notification" />
        </div><!-- end sidebar-widget -->

    </div><!-- end sidebar -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Notification from './Notification.vue'
import axios from 'axios';
//import axios from '@/axiosConfig';

export default {
    components: {
        Notification
    },
    name: 'Sidebar',
    data() {
        return {
            colombiaHolidays: [],
            SectionData,
            storedCart: [],
            userdata: [],
            orderproducts: [],
            load: false,
            showTip: true,
            Tip: 0,
            merchantId: 0,
            accountId: 0,
            description: "",
            referenceCode: "0",
            amount: "",
            tax: 0,
            taxReturnBase: 0,
            currency: "COP",
            signature: "",
            strigsignature: "",
            test: null,
            buyerEmail: "",
            responseUrl: "",
            confirmationUrl: "",
            payuActionUrl: ""
        }
    },

    mounted() {
        this.Tip = this.configvar[0].dealertip
        this.userdata = JSON.parse(localStorage.getItem("UserData"));
        if (localStorage.getItem("shopingcart")) {
            this.storedCart = JSON.parse(this.$GetEncryptedData("shopingcart"));
            if (this.storedCart.length === 0) {
                this.emptyCart = true;

            } else {
                this.emptyCart = false;
            }
        }
    },
    methods: {

        async irapagar() {
            if (this.validarCampos()) {
                this.description = "Domicilio Los emilios"
                this.amount = this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0) + (this.configvar[0].shipvalue + this.Tip)
                this.tax = 0
                this.taxReturnBase = 0
                this.buyerEmail = this.userdata[0]?.email
                this.confirmationUrl = "https://api.losemilios.com/api/v1/transaction/payu"
                this.payuActionUrl = this.configvar[0].payu_url
                this.test = this.configvar[0].payu_test
                this.accountId = this.configvar[0].payu_accountId
                this.merchantId = this.configvar[0].payu_merchant_id
                for (const key in this.storedCart) {
                    const element = this.storedCart[key];
                    this.orderproducts.push({
                        product_id: element.id,
                        sku: "sku-" + element.id,
                        total: element.total,
                        totaladitions: element.totaladitions,
                        unit: "",
                        nota: "",
                        quantity: element.cant,
                        price: element.price,
                        name: element.title,
                        aditions: JSON.stringify(element.cartadditions),
                        options: JSON.stringify(element.cartopcionesSeleccionadas)
                    });
                }
                const data = {
                    tax_amount: 0,
                    shipping_amount: this.configvar[0].shipvalue,
                    tiping_amount: this.Tip,
                    subtotal: this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0),
                    total_sale: this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0) + (this.configvar[0].shipvalue + this.Tip),
                    shipping: this.userdata[0]?.direccion,
                    ship: this.userdata[0]?.adicionalinst ?? "",
                    reference_code: "",
                    customername: this.userdata[0]?.nombre,
                    customertel: this.userdata[0]?.telefono,
                    customeremail: this.userdata[0]?.email,
                    shipping_neighborhood: this.userdata[0]?.neighborhood,
                    User: [{
                        user_id: this.userdata[0]?.user_id ?? 32,
                    },
                    {
                        user_id: 32,
                    }
                    ],
                    OrderStatus: {
                        order_status_id: this.userdata[0]?.PaymentMethod[0] == 3 ? 6 : 1
                    },
                    Paymethod: [
                        {
                            paymethod_id: this.userdata[0]?.PaymentMethod[0]
                        }
                    ],
                    orderproduct: this.orderproducts,
                    Restaurant: {
                        restaurant_id: 1
                    },
                    Transaction: null
                };
                console.log(data)
                const result = await this.$store.dispatch('createorder', data)
                if (result.order_id) {
                    this.orderproducts = []
                    if (this.userdata[0]?.PaymentMethod == 3) {
                        this.responseUrl = "https://domicilios.losemilios.com/ordencompleta-" + result.order_id
                        this.description = "Pedido #" + result.order_id
                        this.referenceCode = result.order_id
                        this.strigsignature = this.configvar[0].payu_apikey.toString() + "~" + this.configvar[0].payu_merchant_id.toString() + "~" + this.referenceCode.toString() + "~" + this.amount.toString() + "~" + this.currency.toString()
                        this.signature = this.$hashText(this.strigsignature)
                        setTimeout(() => {
                            const form = this.$refs.payuForm;
                            form.submit();
                        }, 2000);

                    } else {
                        this.$router.push('/ordencompleta-' + result.order_id)
                    }
                } else {
                    this.$refs.notification.showNotification('Hubo un error procesando la orden, intentalo de nuevo mas tarde', '#D11D23')
                }
            }
        },
        toggleTip() {
            this.showTip = !this.showTip;
            if (!this.Tip && this.Tip !== 0) {
                this.Tip = 0; // O establece otro valor predeterminado
            }
        },
        validarCampos() {
            this.userdata = JSON.parse(localStorage.getItem("UserData"));
            if (this.userdata) {
                for (const key in this.userdata) {
                    if (this.userdata[key].PaymentMethod.length === 0) {
                        this.$refs.notification.showNotification('Selecciona un método de pago', '#D11D23')
                        return false;
                    }
                    if (this.userdata[key].email === "") {
                        this.$refs.notification.showNotification('Ingresa un correo electrónico!', '#D11D23')
                        return false;
                    }
                    if (this.userdata[key].direccion === "") {
                        this.$refs.notification.showNotification('Ingresa una dirección de envio!', '#D11D23')
                        return false;
                    }
                    if (this.userdata[key].nombre === "") {
                        this.$refs.notification.showNotification('Ingresa tu nombre!', '#D11D23')
                        return false;
                    }
                    if (this.userdata[key].telefono === "") {
                        this.$refs.notification.showNotification('Ingresa un numero de teléfono!', '#D11D23')
                        return false;
                    }
                    if (this.totalSum <= 15000) {
                        this.$refs.notification.showNotification('Para completar tu pedido, el monto mínimo de compra es $ 15.000. Agrega más productos para finalizar tu orden.', '#D11D23')
                        return false;
                    }

                }

                return true;
            }
            this.$refs.notification.showNotification('Ingresa los datos de envio!', '#D11D23')
            return false;
        },
        async fetchColombiaHolidays() {
            try {
                const response = await axios.get('https://date.nager.at/api/v3/PublicHolidays/2025/CO');
                console.log(response)
                this.colombiaHolidays = response.data.map(item => item.date); // formato YYYY-MM-DD
            } catch (error) {
                console.error('Error al cargar festivos:', error);
            }
        },
        isWithinTimeRange() {
            const now = new Date();
            const day = now.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
            const todayStr = now.toISOString().split('T')[0];
            const isHoliday = this.colombiaHolidays.includes(todayStr);

            // Si es lunes y NO es festivo → deshabilitado todo el día
            if (day === 1 && !isHoliday) return false;

            // Obtener horario desde configOptions (string → objeto)
            const config = JSON.parse(this.configvar[0].configOptions);
            const apertura = config[0].apertura; // Ej: "6:30 pm"
            const cierre = config[0].cierre;     // Ej: "1:30 am"

            const [openHour, openMinute, openPeriod] = this.parseTime(apertura);
            const [closeHour, closeMinute, closePeriod] = this.parseTime(cierre);

            const openDate = new Date(now);
            openDate.setHours(this.to24Hour(openHour, openPeriod), openMinute, 0, 0);

            const closeDate = new Date(now);
            closeDate.setHours(this.to24Hour(closeHour, closePeriod), closeMinute, 0, 0);

            // Si el cierre es al día siguiente
            if (closeDate <= openDate) {
                closeDate.setDate(closeDate.getDate() + 1);
            }

            return now >= openDate && now < closeDate;
        },

        parseTime(timeStr) {
            const [time, period] = timeStr.toLowerCase().split(' ');
            const [hour, minute] = time.split(':').map(Number);
            return [hour, minute, period];
        },

        to24Hour(hour, period) {
            if (period === 'am') {
                return hour === 12 ? 0 : hour;
            } else {
                return hour === 12 ? 12 : hour + 12;
            }
        }
    },
    computed: {
        totalSum() {
            return this.storedCart.reduce((acc, item) => acc + (item.total * item.cant), 0);
        },
        configvar() {
            return JSON.parse(this.$GetEncryptedData("configvar"));
        },

    }
}
</script>
<style>
.flex-grow-sidebar {
    width: 100%;
}

.propina input {
    width: 65px;
    border: 1px #c7c7c7 solid;
    height: 28px;
    margin-bottom: 12px;
    padding: 5px;
    border-radius: 5px;
}

.propina a {}

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
