<template>
    <section class="register-section section-space-b pt-4 pt-md-5 mt-md-3">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 mb-lg-0 d-none d-lg-block">
                    <img :src="SectionData.registerData.img" alt="" class="img-fluid">
                </div><!-- end col-lg-6 -->
                <div class="col-lg-6 col-md-9">
                    <div class="section-head-sm">
                        <h2 class="mb-2" v-html="SectionData.registerData.title"></h2>
                        <p>{{ SectionData.registerData.subTitle }}</p>
                    </div>
                    <form @submit.prevent="registrar">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-floating mb-4">
                                    <input type="text" class="form-control" v-model="regisData.fullName" id="fullName"
                                        placeholder="Nombre" required>
                                    <label for="fullName">Nombre</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-4">
                                    <input type="text" class="form-control" v-model="regisData.apellido" id="apellido"
                                        placeholder="Apellido" required>
                                    <label for="fullName">Apellido</label>
                                </div>
                            </div>
                        </div>
                        <!-- end form-floating -->
                        <div class="form-floating mb-4">
                            <input type="email" class="form-control" v-model="regisData.emailAddress" id="emailAddress"
                                placeholder="name@example.com" required>
                            <label for="emailAddress">Correo</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="number" class="form-control" v-model="regisData.tel" id="tel"
                                placeholder="Telefono" required>
                            <label for="userName">Telefono</label>
                        </div><!-- end form-floating -->
                        <!-- end form-floating -->
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control password" v-model="regisData.password"
                                id="password" placeholder="Password" required>
                            <label for="password">Password</label>
                            <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                <em class="password-shown ni ni-eye-off"></em>
                                <em class="password-hidden ni ni-eye"></em>
                            </a>
                        </div>
                        <div class="form-floating mb-4">

                            <select class="form-control" v-model="regisData.shipping_neighborhood" id="barrio" required>
                                <option value="" disabled>Selecciona un barrio</option>
                                <option v-for="b in JSON.parse(configvar[0].neighborhood_list)" :key="b" :value="b">{{ b }}</option>
                            </select>
                            <label for="barrio">Barrio</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="text" class="form-control" v-model="regisData.direccion" id="direccion"
                                placeholder="Direccion de entrega" required>
                            <label for="userName">Direccion de entrega</label>
                        </div>
                        <!-- end form-floating -->
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" v-model="regisData.aceptaTerminos"
                                id="aceptaTerminos" required>
                            <label class="form-check-label" for="aceptaTerminos">
                                {{ SectionData.registerData.termText }}
                            </label>
                        </div>
                        <button class="btn btn-primary w-100" type="submit">{{ SectionData.registerData.btnText
                        }}</button>
                        <!-- <span class="d-block my-4">— or sign up with —</span>
                        <ul class="btns-group d-flex">
                            <li class="flex-grow-1" v-for="(list, i) in SectionData.registerData.btns" :key="i"><router-link
                                    :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni"
                                        :class="list.icon"></em> {{ list.title }} </router-link></li>
                        </ul> -->
                        <p class="mt-3 form-text">{{ SectionData.registerData.haveAccountText }} <router-link
                                :to="SectionData.registerData.btnTextLink" class="btn-link">{{
                                    SectionData.registerData.btnTextTwo }}</router-link></p>
                    </form>
                </div><!-- end col-lg-6 -->
            </div><!-- end row -->
        </div><!-- end container -->
    </section><!-- end register-section -->
    <Notification ref="notification" />
</template>
<script>
import SectionData from '@/store/store.js'

export default {
    name: 'RegisterSection',
    data() {
        return {
            SectionData,
            regisData: [],
            UserData: [],
            barriosMedellin: [
                'Belén', 'Laureles', 'El Poblado', 'Robledo', 'Manrique',
                'Aranjuez', 'Buenos Aires', 'San Javier', 'Castilla',
                'Doce de Octubre', 'Villa Hermosa', 'Popular', 'Guayabal',
                'La América', 'Santa Cruz'
            ],
        }
    },
    mounted() {
        /*  ======== Show/Hide passoword ======== */
        function showHidePassword(selector) {
            let elem = document.querySelectorAll(selector);
            if (elem.length > 0) {
                elem.forEach(item => {
                    item.addEventListener("click", function (e) {
                        e.preventDefault();
                        let target = document.getElementById(item.getAttribute("href"));
                        if (target.type == "password") {
                            target.type = "text";
                            item.classList.add("is-shown");
                        } else {
                            target.type = "password";
                            item.classList.remove("is-shown");
                        }
                    });

                });
            }
        }

        showHidePassword(".password-toggle");
    },
    methods: {
        async registrar() {
            /*            const data = {
                   dealer: null,
                   deletedAt: null,
                   document: "",
                   email: this.email ?? this.user[0]?.email,
                   name: this.name ?? this.user[0]?.name,
                   last_name: this.last_name ?? this.user[0]?.last_name,
                   phone: this.phone ?? this.user[0]?.phone,
                   priority: 0,
                   reference_id: 0,
                   restaurant: [{
                     restaurant_id: this.selectedrestaurant ?? this.user[0]?.restaurant[0]?.restaurant_id
                   }],
                   shipping_address: this.shipping_address ?? this.user[0]?.shipping_address,
                   user_login: "",
                   ...(this.user_pass !== null && { user_pass: this.user_pass }),
                   user_status: 1,
                   user_type_id: {
                     user_type_id: this.selectedcategory ?? this.user[0]?.user_type_id.user_type_id
                   },
                 }; */
            this.regisData.user_type_id = { user_type_id: 2 }
            this.regisData.user_registered = new Date().toISOString();
            const result = await this.$store.dispatch('registarusuario', this.regisData)
            if (result.error) {
                this.$refs.notification.showNotification('Usuario el ya existe ', '#4CAF50')
            }
            if (result.success) {
                this.$refs.notification.showNotification('Tu cuenta ha sido creada correctamente y ya puedes iniciar sesión para disfrutar de todos nuestros servicios.', '#198754')
                this.login()
            }

        },

        async login() {
            const result = await this.$store.dispatch('login', this.regisData)
            if (result.accessToken) {
                const resultuser = await this.$store.dispatch('getUsers')
                const userdata = [{
                    user_id: resultuser.user_id,
                    direccion: resultuser.shipping_address,
                    nombre: resultuser.name + " " + resultuser.last_name,
                    email: resultuser.email,
                    telefono: resultuser.phone,
                    neighborhood:resultuser.shipping_neighborhood,
                    adicionalinst: null,
                    PaymentMethod: [],
                    cartinfo: []
                }]
                const parsed = JSON.stringify(userdata);
                localStorage.setItem("UserData", parsed);
                this.UserData = JSON.parse(localStorage.getItem("UserData"));
                this.$store.dispatch('updatedataUser', this.UserData)
                this.$router.push('/');


            } else {
                this.$router.push('/login');
            }

        }
    },
    computed: {
        configvar() {
            return JSON.parse(this.$GetEncryptedData("configvar"));
        }
    },
}
</script>
