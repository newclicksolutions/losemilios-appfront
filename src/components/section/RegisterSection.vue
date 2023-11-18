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
                            <div class="col-md-6"><div class="form-floating mb-4">
                            <input type="text" class="form-control" v-model="fullName" id="fullName" placeholder="Nombre"
                                required>
                            <label for="fullName">Nombre</label>
                        </div></div>
                            <div class="col-md-6"><div class="form-floating mb-4">
                            <input type="text" class="form-control" v-model="apellido" id="apellido" placeholder="Apellido"
                                required>
                            <label for="fullName">Apellido</label>
                        </div></div>
                        </div>
                        <!-- end form-floating -->
                        <div class="form-floating mb-4">
                            <input type="email" class="form-control" v-model="emailAddress" id="emailAddress"
                                placeholder="name@example.com" required>
                            <label for="emailAddress">Correo</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="number" class="form-control" v-model="tel" id="tel" placeholder="Telefono"
                                required>
                            <label for="userName">Telefono</label>
                        </div><!-- end form-floating -->
                        <!-- end form-floating -->
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control password" id="password" placeholder="Password"
                                required>
                            <label for="password">Password</label>
                            <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                <em class="password-shown ni ni-eye-off"></em>
                                <em class="password-hidden ni ni-eye"></em>
                            </a>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="text" class="form-control" v-model="direccion" id="direccion" placeholder="Direccion de entrega"
                                required>
                            <label for="userName">Direccion de entrega</label>
                        </div>
                        <!-- end form-floating -->
                        <p class="mb-4 form-text">{{ SectionData.registerData.termText }}</p>
                        <button class="btn btn-primary w-100" type="submit">{{ SectionData.registerData.btnText }}</button>
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
</template>
<script>
import SectionData from '@/store/store.js'
export default {
    name: 'RegisterSection',
    data() {
        return {
            SectionData
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
    methods:{
        registrar(){
            alert("reg")
        }
    }
}
</script>