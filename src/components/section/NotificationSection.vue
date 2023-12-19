<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>Ultimos pedidos</h3>
        </div><!-- end user-panel-title-box -->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div class="table-responsive" v-if="ishow">
                    <table class="table mb-0 table-s1 fs-13 bg-gray">
                        <thead>
                            <tr>
                                <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in allorders" :key="list.order_id">
                                <th scope="row" class="fw-regular">#{{ list.order_id }}</th>
                                <td><a :href="list.fromLink" class="btn-link fw-regular" style="cursor: pointer;"
                                        @click="verdetalles(list.order_id)">Ver detalles</a></td>
                                <td>{{ $formatoMoneda(list.total_sale) }}</td>
                                <td>{{ $formattedDate(list.date_created) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <div class="card card-creator-s1 mb-4">
                        <div class="cardflex mb-4">
                            <div class="tittleleft">
                                <h6 class="card-s1-title">Resumen #{{ orders[0].order_id }}</h6>
                            </div>
                            <div class="tittlerigth"><span @click="backresume()" class="enRnoF"><em class="ni ni-cross"
                                        data-v-289073a8=""></em></span></div>
                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <div class="orderstatus" :class="orders[0].OrderStatus.status" v>
                                    {{ orders[0].OrderStatus.status }}
                                </div>
                                <h4 class="card-s1-title">{{ orders[0].Restaurant.name }}</h4>
                                <p class="card-s1-text">{{ orders[0].Restaurant.address }}</p>
                                
                            </div>

                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h4 class="card-s1-title">Inicio</h4>
                                <p class="card-s1-text">{{ $formattedDate(orders[0].date_created) }}</p>
                            </div>

                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h4 class="card-s1-title">Entrega</h4>
                                <p v-if="orders[0].OrderStatus.status === 'Completa'" class="card-s1-text">{{
                                        $formattedDate(orders[0].shipped_date) }}</p>
                                    <p v-else class="card-s1-text">Pendiente</p>
                            </div>

                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h4 class="card-s1-title">Resumen</h4>
                                <div class="card-body d-flex align-items-center" v-for="list in orders[0]?.orderproduct"
                                    :key="list.order_products_id">
                                    <div class="avatar avatar-1 flex-shrink-0">
                                        <img :src="require('@/images/thumb/products/' + list.product.img)" alt="avatar" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="card-s1-text" style="float: left: ;">
                                            ({{ list.quantity }})
                                        </p>
                                        <h4 class="card-s1-title"> {{ list.name }}</h4>
                                        <h6 class="card-s1-title"> {{ $formatoMoneda(list.price * list.quantity) }}</h6>
                                        <p v-if="list.aditions.length" class="card-s1-text">
                                            <span v-for="listadd in JSON.parse(list.aditions)" :key="listadd">
                                                {{ listadd.title }} - </span>


                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h4 class="card-s1-title">Metodo de Pago</h4>
                                <p class="card-s1-text">{{ orders[0].Paymethod[0].payment_name }}</p>
                            </div>

                        </div>
                        <div class="card-body d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h4 class="card-s1-title">Costos</h4>
                                <p class="card-s1-text">Costo de los productos: {{ $formatoMoneda(orders[0].subtotal) }}</p>
                                <p class="card-s1-text">Envio: {{ $formatoMoneda(orders[0].shipping_amount) }}</p>
                                <p class="card-s1-text">Propinas: {{ $formatoMoneda(orders[0].tiping_amount) }}</p>
                                <p class="card-s1-text"><b>Total: {{ $formatoMoneda(orders[0].total_sale) }}</b> </p>
                            </div>

                        </div>

                    </div>
                </div>
                <!-- end table-responsive -->
            </div><!-- end tab-pane -->








        </div>



    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
    name: 'NotificationSection',
    data() {
        return {
            SectionData,
            orders: [],
            userdata: [],
            ishow: true
        }
    },
    mounted() {
        /*  ================================================
            Check/Uncheck all checkboxes  with single click
        ===================================================== */
        this.userdata = JSON.parse(localStorage.getItem("UserData"));
        this.$store.dispatch('getorder', this.userdata[0]?.user_id ?? 33);
        function checkboxAllToggle(selector, selectorInputText) {
            let checkAllBtn = document.querySelectorAll(selector)
            let checkAllInput = document.querySelectorAll(selectorInputText)

            if (checkAllBtn.length > 0) {
                checkAllBtn.forEach(item => {
                    item.addEventListener('click', function (e) {
                        if (e.target.value === 'Check All') {
                            checkAllInput.forEach(function (checkbox) {
                                checkbox.checked = true
                            })
                            e.target.value = 'Uncheck All'
                        } else {
                            checkAllInput.forEach(function (checkbox) {
                                checkbox.checked = false
                            })
                            e.target.value = 'Check All'
                        }
                    })
                })
            }
        }

        checkboxAllToggle('.check-all', '.check-all-input')
    },
    methods: {
        verdetalles(id) {
            this.ishow = false
            this.orders = this.$store.state.order.filter(
                (order) => order.order_id === id
            );
        },
        backresume() {
            this.ishow = true
        }
    },
    computed: {
        allorders() {
            return this.$store.state.order
        }
    }
}
</script>
<style>

.orderstatus{
    float: right;
    position: relative;
    top: 0px;
}

.Creada{
    color: green;
}

.Cancelado{
    color: rgb(128, 26, 0);
}

.fallida{
    color: rgb(128, 26, 0);
}

</style>